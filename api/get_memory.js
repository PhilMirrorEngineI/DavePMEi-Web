import { NextResponse } from "next/server"

export async function GET(req: Request) {
  try {
    const apiBase = process.env.PMEI_API_BASE?.replace(/\/$/, "")
    const apiKey = process.env.API_KEY
    const { searchParams } = new URL(req.url)
    const thread_id = searchParams.get("thread_id") || "rev"
    const limit = searchParams.get("limit") || "5"

    const response = await fetch(
      `${apiBase}/get_memory?thread_id=${thread_id}&limit=${limit}`,
      {
        headers: { "X-API-KEY": apiKey! },
      }
    )

    const data = await response.json()
    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
