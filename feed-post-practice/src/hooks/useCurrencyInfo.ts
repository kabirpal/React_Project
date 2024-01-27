import { useEffect, useState } from "react";

function useCurrencyInfo(currency:any){
    // const[data,setData] = useState({});
    useEffect(()=>{
        fetch(`D:/React_Project/feed-post-practice/src/assets/jsonData/currencyConverterData.json`)
        .then((res)=> 
            console.log(res)
        )
    },[currency]);
    // return data
}

export default useCurrencyInfo;