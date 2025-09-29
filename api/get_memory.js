export default async function handler(req, res) {
  try {
    const response = await fetch(`${process.env.PMEI_API_BASE}/get_memory?limit=5`, {
      headers: { "X-API-KEY": process.env.API_KEY }
    });

    const data = await response.json();
    res.status(response.status).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
