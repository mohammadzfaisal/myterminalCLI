// Configuration constants for animation timing
const TYPING_SPEED = 110;        // milliseconds per character
const INITIAL_DELAY = 2200;      // milliseconds before first command
const COMMAND_DELAY = 1500;      // milliseconds between commands
const OUTPUT_DELAY = 800;        // milliseconds after output before next command
const LOOP_DELAY = 5000;         // milliseconds before restarting animation
const PROMPT = '<span class="prompt">[faisal@resume]~$</span> ';

// Progress bar helper function
function progressBar(percentage, width = 20) {
    const filled = Math.round(width * (percentage / 100));
    const empty = width - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
}

// ASCII Art Banner Data - mohammad faisal (Standard font - simple and clean)
const asciiBanner = [
    '                 _                                _    __       _           _ ',
    ' _ __ ___   ___ | |__   __ _ _ __ ___  _ __ ___  __ _  __| |  / _| __ _(_)___  __ _| |',
    '| \'_ ` _ \\ / _ \\| \'_ \\ / _` | \'_ ` _ \\| \'_ ` _ \\ / _` |/ _` | | |_ / _` | / __|/ _` | |',
    '| | | | | | (_) | | | | (_| | | | | | | | | | | | (_| | (_| | |  _| (_| | \\__ \\ (_| | |',
    '|_| |_| |_|\\___/|_| |_|\\__,_|_| |_| |_|_| |_| |_|\\__,_|\\__,_| |_|  \\__,_|_|___/\\__,_|_|'
];

// Resume data with commands and outputs
const resumeData = {
    commands: [
        {
            cmd: '',
            output: `ASCII_BANNER_PLACEHOLDER`
        },
        {
            cmd: 'whois',
            output: `<span class="cyan bold">Mohammad Faisal</span>
<span class="green">Cloud Engineer</span> | Calgary, AB

Email: myterminal@faisal.quest
GitHub: <a href="https://github.com/mohammadzfaisal" target="_blank">github.com/mohammadzfaisal</a>
LinkedIn: <a href="https://linkedin.com/in/mohammadzfaisal" target="_blank">linkedin.com/in/mohammadzfaisal</a>
Website: <a href="https://ysap.sh" target="_blank">https://ysap.sh</a>
`
        },
        {
            cmd: 'cat work_experience.txt',
            output: `<span class="orange bold">WORK EXPERIENCE</span>
─────────────────────────────────────────────────

<span class="cyan bold">Senior Cloud Engineer</span>
Tech Corp | Remote | 2020 - Present

• Led cloud migration initiatives for enterprise clients
• Designed and implemented multi-region AWS infrastructure
• Reduced infrastructure costs by 40% through optimization
• Automated deployment pipelines with Terraform and Jenkins

<span class="cyan bold">DevOps Engineer</span>
Previous Company | 2018 - 2020

• Automated deployment pipelines with Jenkins and GitLab CI
• Managed Kubernetes clusters serving 1M+ daily users
• Implemented monitoring and alerting with Prometheus/Grafana
`
        },
        {
            cmd: 'cat education.txt',
            output: `<span class="purple bold">EDUCATION</span>
─────────────────────────────────────────────────

<span class="green bold">Bachelor of Computer Science</span>
University XYZ | 2018

Focus: Distributed Systems and Cloud Computing
GPA: 3.8/4.0

Relevant Coursework:
• Cloud Computing Architecture
• Distributed Systems
• Network Security
• Database Management
`
        },
        {
            cmd: 'ls certifications/',
            output: `<span class="yellow bold">CERTIFICATIONS</span>
─────────────────────────────────────────────────

<span class="green">✓</span> AWS Solutions Architect Professional (2023)
<span class="green">✓</span> Kubernetes Administrator (CKA) (2022)
<span class="green">✓</span> HashiCorp Terraform Associate (2022)
<span class="green">✓</span> AWS DevOps Engineer Professional (2021)
`
        },
        {
            cmd: 'cat skills.json',
            output: `<span class="pink bold">TECHNICAL SKILLS</span>
─────────────────────────────────────────────────

<span class="cyan">Cloud Platforms:</span>
  AWS: [${progressBar(90)}] 90%
  Azure: [${progressBar(70)}] 70%

<span class="cyan">Containers & Orchestration:</span>
  Kubernetes: [${progressBar(85)}] 85%
  Docker: [${progressBar(88)}] 88%

<span class="cyan">Infrastructure as Code:</span>
  Terraform: [${progressBar(85)}] 85%
  CloudFormation: [${progressBar(75)}] 75%

<span class="cyan">CI/CD:</span>
  Jenkins: [${progressBar(80)}] 80%
  GitLab CI: [${progressBar(82)}] 82%
  GitHub Actions: [${progressBar(78)}] 78%

<span class="cyan">Programming:</span>
  Python: [${progressBar(85)}] 85%
  Bash/Shell: [${progressBar(90)}] 90%
  JavaScript: [${progressBar(75)}] 75%
`
        },
        {
            cmd: 'ls projects/',
            output: `<span class="purple bold">FEATURED PROJECTS</span>
─────────────────────────────────────────────────

<span class="green">●</span> <span class="cyan bold">cloud-dashboard</span>
  Multi-cloud monitoring dashboard
  Tech: [AWS] [Terraform] [React]

<span class="orange">◐</span> <span class="cyan bold">eks-automation</span>
  Production-ready EKS cluster automation
  Tech: [Kubernetes] [Terraform] [Python]

<span class="green">●</span> <span class="cyan bold">multi-region-vpc</span>
  Automated global infrastructure rollout
  Tech: [AWS] [Terraform] [CloudFormation]

View all projects: <a href="/myprojects/" target="_blank">myprojects/</a>
`
        },
        {
            cmd: 'curl -O resume.pdf',
            output: `<span class="green">Downloading resume.pdf...</span>
[████████████████████████████] 100%

<span class="cyan bold">📄 Download Complete!</span>

<a href="/resume.pdf" download="Mohammad_Faisal_Resume.pdf" class="bold">→ Click here to save resume.pdf</a>

──────────────────────────────────────────────────
<span class="yellow bold">Thanks for viewing my resume!</span>

<span class="comment">Press any key to restart animation</span>
<span class="comment">Visit <a href="/">main terminal</a> for interactive experience</span>
`
        }
    ]
};

// Global state
let terminal = null;
let commandIndex = 0;
let isTyping = false;
let isSkipped = false;

// Initialize terminal element
function initTerminal() {
    terminal = document.getElementById('terminal');
    if (!terminal) {
        console.error('Terminal element not found');
        return false;
    }
    return true;
}

// Type command character by character
function typeCommand(command, callback) {
    if (isSkipped) {
        terminal.innerHTML += PROMPT + command + '\n';
        callback();
        return;
    }

    let i = 0;
    isTyping = true;

    const cursor = '<span class="cursor">_</span>';
    terminal.innerHTML += PROMPT;

    const interval = setInterval(() => {
        if (i < command.length) {
            // Remove cursor, add next character, re-add cursor
            terminal.innerHTML = terminal.innerHTML.replace(cursor, '');
            terminal.innerHTML += command[i] + cursor;
            i++;

            // Scroll terminal body instead of window
            const terminalBody = document.querySelector('.terminal-body');
            if (terminalBody) {
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        } else {
            clearInterval(interval);
            terminal.innerHTML = terminal.innerHTML.replace(cursor, '');
            terminal.innerHTML += '\n';
            isTyping = false;
            callback();
        }
    }, TYPING_SPEED);
}

// Display command output
function showOutput(output, callback) {
    terminal.innerHTML += output + '\n\n';

    // Scroll terminal body instead of window
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    if (isSkipped) {
        callback();
    } else {
        setTimeout(callback, OUTPUT_DELAY);
    }
}

// ASCII banner animation - character by character like Claude Code (single cyan color)
function showAsciiBannerAnimated(callback) {
    if (isSkipped) {
        // Show all at once if skipped
        const fullBanner = asciiBanner.map(line => line).join('\n');
        terminal.innerHTML += `<div style="text-align: center; margin: 20px 0;">\n<span class="cyan bold" style="text-shadow: 0 0 10px rgba(139, 233, 253, 0.3);">${fullBanner}</span>\n<span class="green" style="font-size: 16px;">Cloud Engineer | DevOps Specialist</span>\n</div>\n<span class="comment">─────────────────────────────────────────────────</span>\n\n`;

        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
        callback();
        return;
    }

    // Create container for banner
    const bannerId = 'ascii-banner-' + Date.now();
    terminal.innerHTML += `<div id="${bannerId}" style="text-align: center; margin: 20px 0;"></div>`;
    const bannerDiv = document.getElementById(bannerId);

    let lineIndex = 0;
    let charIndex = 0;

    function animateNextChar() {
        if (lineIndex >= asciiBanner.length) {
            // Animation complete - add subtitle and separator
            bannerDiv.innerHTML += '\n<span class="green" style="font-size: 16px;">Cloud Engineer | DevOps Specialist</span>\n';
            terminal.innerHTML += '<span class="comment">─────────────────────────────────────────────────</span>\n\n';

            const terminalBody = document.querySelector('.terminal-body');
            if (terminalBody) {
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
            callback();
            return;
        }

        const currentLine = asciiBanner[lineIndex];

        if (charIndex === 0) {
            // Start new line with cyan color
            bannerDiv.innerHTML += `<span class="cyan bold" style="text-shadow: 0 0 10px rgba(139, 233, 253, 0.3);">`;
        }

        if (charIndex < currentLine.length) {
            // Add next character
            const char = currentLine[charIndex];
            const spans = bannerDiv.getElementsByTagName('span');
            const currentSpan = spans[spans.length - 1];
            currentSpan.innerHTML += char;
            charIndex++;

            // Scroll to bottom
            const terminalBody = document.querySelector('.terminal-body');
            if (terminalBody) {
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }

            // Continue with next character after short delay
            setTimeout(animateNextChar, 8); // 8ms per character for smooth effect
        } else {
            // Line complete - close span and add newline
            bannerDiv.innerHTML += '</span>\n';
            lineIndex++;
            charIndex = 0;

            // Small delay between lines
            setTimeout(animateNextChar, 30);
        }
    }

    animateNextChar();
}

// Execute command sequence
function executeCommand(index) {
    if (index >= resumeData.commands.length) {
        // End of sequence - mark completion
        commandIndex = resumeData.commands.length;

        if (!isSkipped) {
            // Auto-restart after delay
            setTimeout(() => {
                commandIndex = 0;
                terminal.innerHTML = '';
                isSkipped = false;
                startResume();
            }, LOOP_DELAY);
        }
        return;
    }

    const cmd = resumeData.commands[index];
    const delay = index === 0 ? INITIAL_DELAY : COMMAND_DELAY;

    setTimeout(() => {
        // Special handling for ASCII banner (first command)
        if (index === 0 && cmd.output === 'ASCII_BANNER_PLACEHOLDER') {
            showAsciiBannerAnimated(() => {
                commandIndex = index + 1;
                executeCommand(index + 1);
            });
        } else {
            typeCommand(cmd.cmd, () => {
                showOutput(cmd.output, () => {
                    commandIndex = index + 1;
                    executeCommand(index + 1);
                });
            });
        }
    }, isSkipped ? 0 : delay);
}

// Start the resume animation
function startResume() {
    if (!terminal) {
        if (!initTerminal()) return;
    }

    commandIndex = 0;
    executeCommand(0);
}

// Skip animation - show all content immediately
function skipAnimation() {
    isSkipped = true;
    terminal.innerHTML = '';

    resumeData.commands.forEach((cmd, index) => {
        // Special handling for ASCII banner
        if (index === 0 && cmd.output === 'ASCII_BANNER_PLACEHOLDER') {
            const fullBanner = asciiBanner.map(line => line).join('\n');
            terminal.innerHTML += `<div style="text-align: center; margin: 20px 0;">\n<span class="cyan bold" style="text-shadow: 0 0 10px rgba(139, 233, 253, 0.3);">${fullBanner}</span>\n<span class="green" style="font-size: 16px;">Cloud Engineer | DevOps Specialist</span>\n</div>\n<span class="comment">─────────────────────────────────────────────────</span>\n\n`;
        } else {
            if (cmd.cmd) {
                terminal.innerHTML += PROMPT + cmd.cmd + '\n';
            }
            terminal.innerHTML += cmd.output + '\n\n';
        }
    });

    commandIndex = resumeData.commands.length;
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

// Restart animation
function restartAnimation() {
    terminal.innerHTML = '';
    commandIndex = 0;
    isSkipped = false;
    isTyping = false;
    startResume();
}

// Initialize on page load
window.onload = () => {
    if (!initTerminal()) {
        console.error('Failed to initialize terminal');
        return;
    }

    // Set up skip button
    const skipBtn = document.getElementById('skipBtn');
    if (skipBtn) {
        skipBtn.addEventListener('click', skipAnimation);
    }

    // Start the animation
    startResume();
};

// Restart on any key press (after sequence completes)
document.addEventListener('keydown', (e) => {
    if (!isTyping && commandIndex >= resumeData.commands.length) {
        e.preventDefault();
        restartAnimation();
    }
});
