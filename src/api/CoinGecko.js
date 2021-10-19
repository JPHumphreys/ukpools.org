async function Ping(){
    const response = await fetch
    (
        "https://api.coingecko.com/api/v3/ping",
        {
            method:"GET"
        }
    );

    if(response.ok){
        return true;
    }

    return false;
}

async function GetPolkadot(){
    const response = await fetch
    (
        "https://api.coingecko.com/api/v3/coins/polkadot",
        {
            method:"GET"
        }
    );

    return await response.json();
}

export {
    Ping,
    GetPolkadot
}