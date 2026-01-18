import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data.json"
POSTS_DIR = ROOT / "content" / "posts"
PROJECTS_DIR = ROOT / "content" / "projects"
CHALLENGE_DIR = POSTS_DIR / "terraform-30"


def parse_front_matter(text: str):
    text = text.replace("\r\n", "\n")
    if not text.startswith("---\n"):
        return {}, text
    lines = text.split("\n")
    meta = {}
    body_start = 0
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            body_start = i + 1
            break
        match = re.match(r"^([A-Za-z0-9_-]+)\s*:\s*(.*)$", lines[i])
        if match:
            key = match.group(1)
            raw_value = match.group(2).strip()
            meta[key] = raw_value
    body = "\n".join(lines[body_start:])
    return meta, body


def parse_value(raw):
    if raw is None:
        return None
    raw = raw.strip()
    if raw.startswith('"') and raw.endswith('"'):
        raw = raw[1:-1]
    if raw.startswith("'") and raw.endswith("'"):
        raw = raw[1:-1]
    if raw.startswith("[") or raw.startswith("{"):
        try:
            return json.loads(raw)
        except json.JSONDecodeError:
            return raw
    return raw


def load_md(path: Path):
    text = path.read_text(encoding="utf-8")
    meta, _ = parse_front_matter(text)
    parsed = {k: parse_value(v) for k, v in meta.items()}
    return parsed


def is_draft(meta: dict) -> bool:
    value = meta.get("draft")
    if value is None:
        return False
    if isinstance(value, bool):
        return value
    return str(value).strip().lower() in {"true", "1", "yes", "y"}


def sync():
    with DATA_PATH.open("r", encoding="utf-8") as f:
        data = json.load(f)

    blogs = []
    for path in POSTS_DIR.glob("*.md"):
        meta = load_md(path)
        if is_draft(meta):
            continue
        slug = path.stem
        blog_id = meta.get("id") or slug
        blogs.append(
            {
                "id": blog_id,
                "title": meta.get("title", slug),
                "date": meta.get("date", ""),
                "category": meta.get("category", ""),
                "description": meta.get("description", ""),
            }
        )
    blogs.sort(key=lambda item: item.get("date", ""), reverse=True)

    projects = []
    for path in PROJECTS_DIR.glob("*.md"):
        meta = load_md(path)
        if is_draft(meta):
            continue
        slug = path.stem
        project_id = meta.get("id") or slug
        project = {
            "id": project_id,
            "title": meta.get("title", slug),
            "description": meta.get("description", ""),
        }
        if meta.get("link"):
            project["link"] = meta.get("link")
        badges = meta.get("badges")
        if isinstance(badges, list) and badges:
            project["badges"] = badges
        projects.append(project)

    challenge = []
    for path in CHALLENGE_DIR.glob("tf-day*.md"):
        meta = load_md(path)
        if is_draft(meta):
            continue
        slug = path.stem
        day_match = re.search(r"(\d+)$", slug)
        day = meta.get("day") or (day_match.group(1) if day_match else slug)
        challenge.append(
            {
                "day": str(day).zfill(2),
                "title": meta.get("title", slug),
                "status": meta.get("status", "locked"),
            }
        )
    challenge.sort(key=lambda item: item.get("day", ""))

    new_data = dict(data)
    new_data["blogs"] = blogs
    new_data["projects"] = projects
    new_data["terraform_challenge"] = challenge

    with DATA_PATH.open("w", encoding="utf-8") as f:
        json.dump(new_data, f, indent=2)
        f.write("\n")


if __name__ == "__main__":
    sync()
