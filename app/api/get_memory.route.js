export async function GET() {
  try {
    const response = await fetch(`${process.env.PMEI_API_BASE}/get_memory?limit=50`, {
      headers: {
        "X-API-KEY": process.env.API_KEY,
      },
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
