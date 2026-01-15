function normalizeChallengeStatus(status) {
	return String(status || '').toLowerCase().replace(/\s+/g, '');
}

function getElementBySelector(selector) {
	if (!selector) return null;
	return document.querySelector(selector);
}

function renderChallengeCards(container, days, config) {
	container.innerHTML = days.map((item) => {
		const statusKey = normalizeChallengeStatus(item.status);
		const isLocked = statusKey === 'locked';
		const isCompleted = statusKey === 'completed';
		const isActive = statusKey === 'active' || statusKey === 'inprogress';
		const url = isLocked
			? 'javascript:void(0)'
			: `/view.html?post=${config.postPrefix}${item.day}&type=${config.postType}`;
		const statusText = isCompleted ? 'COMPLETED' : (isActive ? 'IN PROGRESS' : 'LOCKED');
		const actionText = isLocked ? 'Locked' : (isCompleted ? 'Revise' : 'Start');
		const titleText = `Day ${item.day}: ${item.title}`;

		return `
			<a href="${url}" class="day-card ${statusKey}">
				<span class="day-index">${item.day}</span>
				<span class="day-title">${titleText}</span>
				<span class="day-meta">
					<span class="day-status">${statusText}</span>
					<span class="day-action">${actionText}</span>
				</span>
			</a>
		`;
	}).join('');
}

function updateChallengeProgress(config, data) {
	const totalDays = data.length;
	const completedDays = data.filter((day) => normalizeChallengeStatus(day.status) === 'completed').length;
	const percentage = totalDays === 0 ? 0 : Math.round((completedDays / totalDays) * 100);

	if (config.progressFill) {
		config.progressFill.style.width = `${percentage}%`;
		if (percentage === 100) {
			config.progressFill.style.background = 'var(--color1)';
		}
	}
	if (config.progressPercent) {
		config.progressPercent.textContent = percentage;
	}
	if (config.progressStat) {
		config.progressStat.textContent = `${completedDays}/${totalDays} Days`;
	}
}

function initChallengeList(container) {
	const config = {
		source: container.getAttribute('data-source') || '/data.json',
		key: container.getAttribute('data-key') || 'terraform_challenge',
		postPrefix: container.getAttribute('data-post-prefix') || '',
		postType: container.getAttribute('data-post-type') || 'posts',
		searchInput: getElementBySelector(container.getAttribute('data-search')),
		progressFill: getElementBySelector(container.getAttribute('data-progress-fill')),
		progressPercent: getElementBySelector(container.getAttribute('data-progress-percent')),
		progressStat: getElementBySelector(container.getAttribute('data-progress-stat')),
	};

	let allDays = [];

	fetch(config.source)
		.then((response) => {
			if (!response.ok) throw new Error('Check if data.json exists in root');
			return response.json();
		})
		.then((data) => {
			allDays = data[config.key] || [];
			renderChallengeCards(container, allDays, config);
			updateChallengeProgress(config, allDays);
		})
		.catch((err) => {
			console.error(err);
			container.innerHTML = '<p style="color:#ff5555">Error: Could not load data.json. Ensure it is reachable.</p>';
		});

	if (config.searchInput) {
		config.searchInput.addEventListener('input', (e) => {
			const searchTerm = e.target.value.toLowerCase();
			const filteredDays = allDays.filter((item) => {
				return item.title.toLowerCase().includes(searchTerm) || String(item.day).includes(searchTerm);
			});
			renderChallengeCards(container, filteredDays, config);
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-challenge-list]').forEach(initChallengeList);
});
