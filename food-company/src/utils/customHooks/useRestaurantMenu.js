import { useEffect, useState } from 'react'
import { RES_MENU_API } from '../constants';

const useRestaurantMenu = (resId)=>{
    const [resMenu, setResMenu] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=> {
        const data = await fetch(RES_MENU_API+resId);
        const json = await data.json();
        setResMenu(json);
    };

    return resMenu;
}

export default useRestaurantMenu; 