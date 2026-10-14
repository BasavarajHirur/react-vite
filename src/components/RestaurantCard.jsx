import { useEffect } from "react";
import { CLOUDINARY_URL } from "../utils/constant";

function RestaurantCard({ restaurant }) {
    const { name, cuisine, avgRating, sla, cloudinaryImageId, areaName } = restaurant;
    useEffect(() => {
        console.log('child useEffect');
    }, []);

    console.log('child render');
    return (
        <div className="w-full">
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-md">
                <img src={CLOUDINARY_URL + cloudinaryImageId} alt={name} className="h-full w-full object-cover" />
            </div>

            <div className="px-2 pt-3">
                <h3 className="truncate text-[17px] font-bold leading-tight text-gray-900">{name}</h3>

                <div className="mt-0.5 flex items-center gap-1 text-[14px] font-medium text-gray-900">
                    <span>{avgRating}</span>
                    <span>•</span>
                    <span>{sla.deliveryTime}</span>
                </div>

                <p className="mt-1 truncate text-[14px] text-gray-500">{cuisine}</p>
                <p className="truncate text-[14px] text-gray-500">{areaName}</p>
            </div>
        </div>
    );
}

export default RestaurantCard;