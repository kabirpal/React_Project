import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText]= useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKT");
        const fetchedData = await data.json();
        setListOfRestaurant(fetchedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(fetchedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if(listOfRestaurant.length === 0){
    //     return <Shimmer/>
    // }
    //Using Ternary Operator

    return (listOfRestaurant.length === 0)?<Shimmer/>:(
        <div className="body-container">
            <div className="top-res">
                <div className='search-container'>
                    <input type="text" className="search-bar" placeholder='Enter search keyword' value={searchText} onChange={(e)=>(setSearchText(e.target.value))}/>                
                    <button type='button' id='search-btn' 
                        onClick={()=>{
                            const filteredRestList = listOfRestaurant.filter(
                                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRestList); 
                            }}> 
                        Search
                    </button>
                </div>


                <div className="filter-btn">
                    <button className="filter-btn" 
                        onClick={()=>{
                            const filteredResList = listOfRestaurant.filter((res)=>res.info.avgRating>4.5);
                            setFilteredRestaurant(filteredResList); 
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>         
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
