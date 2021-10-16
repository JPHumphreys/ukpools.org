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

export default Ping;