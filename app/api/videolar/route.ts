import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { addVideo, getVideos, removeVideo } from "@/lib/videos";

function ok(p: string | null) {
  return p && process.env.ADMIN_PASSWORD && p === process.env.ADMIN_PASSWORD;
}

export async function GET() {
  return NextResponse.json({ videos: getVideos() });
}

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const title = String(form.get("title") ?? "").slice(0, 100).trim();
  const description = String(form.get("description") ?? "").slice(0, 500).trim();
  const file = form.get("file");

  if (!ok(password)) return NextResponse.json({ ok: false, error: "Şifre hatalı." }, { status: 401 });
  if (!title) return NextResponse.json({ ok: false, error: "Başlık gerekli." }, { status: 400 });
  if (!(file instanceof File) || file.size === 0)
    return NextResponse.json({ ok: false, error: "Video dosyası gerekli." }, { status: 400 });
  if (!file.type.startsWith("video/"))
    return NextResponse.json({ ok: false, error: "Sadece video dosyası yüklenebilir." }, { status: 400 });

  const ext = (file.name.split(".").pop() || "mp4").toLowerCase().replace(/[^a-z0-9]/g, "") || "mp4";
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const dir = path.join(process.cwd(), "public", "uploads", "videos");
  fs.mkdirSync(dir, { recursive: true });
  const buf = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(path.join(dir, name), buf);

  const src = `/uploads/videos/${name}`;
  addVideo({ title, src, description: description || undefined, date: new Date().toISOString() });
  return NextResponse.json({ ok: true, src });
}

export async function DELETE(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!ok(String(body.password ?? "")))
    return NextResponse.json({ ok: false, error: "Şifre hatalı." }, { status: 401 });
  const src = String(body.src ?? "");
  if (!src.startsWith("/uploads/videos/")) return NextResponse.json({ ok: false, error: "Geçersiz." }, { status: 400 });
  removeVideo(src);
  return NextResponse.json({ ok: true });
}
