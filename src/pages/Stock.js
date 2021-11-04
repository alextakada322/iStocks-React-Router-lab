import React, {useState, useEffect} from "react"

function Stock (props){
    // state to hold the stock data
    const [stocks, setStocks] = useState(null);
    // function to fetch stock data
    const getData = async () => {
        const symbol = props.match.params.symbol
        const response = await fetch (`https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=d06bc5d12090f2dc3cd60913a879b41b`)
        const data = await response.json()
        setStocks(data)
    };

    // useEffect to call getData on page load aka when component mounts
    useEffect(() => {
        getData()
    }, [])

    // loaded function for when data is fetched
    const loaded = () => {
        return(
            <div>
                <h2>{stocks[0].symbol}</h2>
                <h2>Price: ${stocks[0].price}</h2>
            </div>
        )
    }

    // function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return stocks ? loaded() : loading()
}

export default Stock;