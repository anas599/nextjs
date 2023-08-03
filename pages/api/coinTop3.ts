export default async function handler(req: any, res: any) {
  const apiKey = process.env.COIN_MARKET_CAP_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'API key is missing' });
    return;
  }
  if (req.method !== 'GET') {
    res.status(500).json({ error: 'Only GET requests are allowed' });
    return;
  }
  const response = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=3&convert=USD',
    {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    },
  );
  if (!response.ok) {
    res.status(500).json({ error: 'Failed to fetch data' });
    return;
  }
  const data = await response.json();
  res.status(200).json(data);
}
