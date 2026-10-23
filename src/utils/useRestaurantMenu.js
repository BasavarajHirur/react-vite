import { useEffect, useState } from "react";
import { restaurantMenuApi } from '../resto-api/restaurantMenuApi';
import { defaultValues } from './defaultMenu';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchData();
        console.log(resInfo);
    }, []);

    const fetchData = async () => {
        try {
            const data = await restaurantMenuApi(resId);
            setResInfo(data);
        } catch (err) {
            setResInfo(defaultValues);
        }
    };

    return resInfo;
};

export default useRestaurantMenu;