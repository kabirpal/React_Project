import { useEffect, useState } from "react";

function useCurrencyInfo(currency:any){
    const[data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmedo/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json)
        // console.log(res)
        // .then((res)=> setData(rescurrency));
    },[currency]);
    return data
}

export default useCurrencyInfo;