type Crypto1 = {
    "id": number,
    "image": String,
    "name": string,
    "username": string,
    "symbol": string,
    "current_price": number,
    "total_volume": number,
    "market_cap": number,
    "description": {
        "en": string
    },
    "image": {
        "large": string
    },
    "market_data": {
        "current_price": {
            "usd": number
        },
        "total_volume": {
            "usd": number
        },
        "market_cap": {
            "usd": number
        }
    }
}
type Image = {
    "large": string
}