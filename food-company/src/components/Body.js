import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body-container">
            <div className="top-res">
                <div className="filter-btn">
                    <button className="filter-btn" 
                    onClick={()=>{
                       const filteredResList = listOfRestaurant.filter((res)=>res.info.avgRating>4.5);
                       setListOfRestaurant(filteredResList); 
                    }}>Top Rated Restaurants</button>
                </div>         
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
