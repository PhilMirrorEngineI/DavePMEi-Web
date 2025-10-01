import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = await fetch(process.env.VERCEL_DEPLOY_HOOK_URL as string, {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Vercel returned ${res.status}`);
    }

    return NextResponse.json({ ok: true, message: "Redeploy triggered." });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
