export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    // Basic usage logging — visible in Vercel function logs
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      model: req.body?.model,
      input_tokens: data?.usage?.input_tokens,
      output_tokens: data?.usage?.output_tokens,
      status: response.status
    }));

    return res.status(response.status).json(data);

  } catch (error) {
    console.error('API error:', error.message);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
