import fs from "node:fs";
import path from "node:path";

export type VideoItem = { title: string; src: string; date: string };

const FILE = path.join(process.cwd(), "data", "videos.json");

export function getVideos(): VideoItem[] {
  try {
    const raw = fs.readFileSync(FILE, "utf8");
    return JSON.parse(raw) as VideoItem[];
  } catch {
    return [];
  }
}

export function addVideo(item: VideoItem) {
  const list = getVideos();
  list.unshift(item);
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(list, null, 2), "utf8");
}

export function removeVideo(src: string) {
  const list = getVideos().filter((v) => v.src !== src);
  fs.writeFileSync(FILE, JSON.stringify(list, null, 2), "utf8");
  try {
    fs.unlinkSync(path.join(process.cwd(), "public", src));
  } catch {}
}
