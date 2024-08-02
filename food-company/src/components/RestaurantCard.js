import { CDN_URL } from "../utils/constants";

const styleCard =  {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, costForTwo, deliveryTime, avgRating} = resData.info;
    return (
        <div className="res-card" style={styleCard}>
            <img src={CDN_URL+cloudinaryImageId} 
            alt="res-logo" className='res-logo' />
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4 style={{color:'green'}}>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard;