import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";

const RestaurantMenu = ()=>{
    
    const {resId} = useParams()
    
    const resMenu = useRestaurantMenu(resId)

    
    if(resMenu.length === 0){
        return <Shimmer/>
    }
    const {name, costForTwoMessage, cuisines, totalRatingsString} = resMenu?.data?.cards[2]?.card?.card?.info;
    const menuItems = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    
    console.log(menuItems);
    
    return(
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} and {costForTwoMessage}</p>
            <h5 style={{color:'green'}}>{totalRatingsString}</h5>
            <h2>Menu Items</h2>
            <ul>
                {menuItems.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs. 
                        {item.card.info.price/100 || item.card.info.defaultPrice/100} 

                    </li>))}

            </ul>
        </div>
    )
}

export default RestaurantMenu;