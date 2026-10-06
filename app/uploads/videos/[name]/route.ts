import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

const VIDEO_DIR = path.join(process.cwd(), "public", "uploads", "videos");

export async function GET(req: Request, { params }: { params: { name: string } }) {
  const name = params.name;
  if (!/^[a-zA-Z0-9._-]+$/.test(name)) return new NextResponse("Geçersiz", { status: 400 });
  const file = path.join(VIDEO_DIR, name);
  if (!file.startsWith(VIDEO_DIR) || !fs.existsSync(file)) return new NextResponse("Yok", { status: 404 });
  const stat = fs.statSync(file);
  const ext = (name.split(".").pop() || "mp4").toLowerCase();
  const type = ext === "webm" ? "video/webm" : ext === "mov" ? "video/quicktime" : "video/mp4";
  const range = req.headers.get("range");
  if (range) {
    const m = /bytes=(\d+)-(\d*)/.exec(range);
    const start = m ? parseInt(m[1]) : 0;
    const end = m && m[2] ? Math.min(parseInt(m[2]), stat.size - 1) : stat.size - 1;
    const stream = fs.createReadStream(file, { start, end });
    const web = new ReadableStream({
      start(c) {
        stream.on("data", (ch) => c.enqueue(ch));
        stream.on("end", () => c.close());
        stream.on("error", (e) => c.error(e));
      },
      cancel() {
        stream.destroy();
      },
    });
    return new NextResponse(web as any, {
      status: 206,
      headers: {
        "Content-Type": type,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": String(end - start + 1),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }
  const buf = fs.readFileSync(file);
  return new NextResponse(buf, {
    headers: {
      "Content-Type": type,
      "Accept-Ranges": "bytes",
      "Content-Length": String(stat.size),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
