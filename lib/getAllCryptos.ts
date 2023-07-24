async function getAllCryptos() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/')

    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
export default getAllCryptos