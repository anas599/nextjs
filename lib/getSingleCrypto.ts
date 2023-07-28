export default async function getSingleCrypto(id: string) {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    if (!res.ok) throw new Error('failed to fetch Crypto data properly due to API request limit')
    return res.json()
}