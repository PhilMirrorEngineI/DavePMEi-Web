export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(`${process.env.PMEI_API_BASE}/memory_manager`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_KEY,
      },
      body: JSON.stringify({
        no_save: true,
        filters: { limit: 50 } // get last 50 memories
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user_id = "rev", thread_id = "rev-chat", limit = 10 } = req.query;

  try {
    const response = await fetch(`${process.env.PMEI_API_BASE}/get_memory?user_id=${user_id}&thread_id=${thread_id}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_KEY,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json({ memories: data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}}
