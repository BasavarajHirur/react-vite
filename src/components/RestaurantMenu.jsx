import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from 'react';

const StarBadge = () => (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-700">
        <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    </span>
);

const SearchIcon = () => (
    <svg
        className="h-4 w-4 text-gray-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
    </svg>
);

const RestraurantMenu = () => {
    const { id } = useParams();
    const [showIndex, setShowIndex] = useState(0);

    //const restInfo = useRestaurantMenu(id);
    console.log()
    const restInfo = [
        {
            id: 1,
            label: "Recommended",
            items: [
                {
                    name: "Chicken Boneless Curry",
                    price: 370,
                    rating: 4.5,
                    ratingCount: 1000,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                },
                {
                    name: "Butter Chicken Curry",
                    price: 375,
                    rating: 4.3,
                    ratingCount: 1000,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                }]
        },
        {
            id: 2,
            label: "Day Special",
            items: [
                {
                    name: "Chicken Boneless Curry",
                    price: 370,
                    rating: 4.5,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                },
                {
                    name: "Butter Chicken Curry",
                    price: 375,
                    rating: 4.3,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                }]
        },
        {
            id: 3,
            label: "Box Biryani-new Launch Non Veg",
            items: [
                {
                    name: "Chicken Boneless Curry",
                    price: 370,
                    rating: 4.5,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                },
                {
                    name: "Butter Chicken Curry",
                    price: 375,
                    rating: 4.3,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                }]
        },
        {
            id: 4,
            label: "Box Biryani-new Launch Veg",
            items: [
                {
                    name: "Chicken Boneless Curry",
                    price: 370,
                    rating: 4.5,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                },
                {
                    name: "Butter Chicken Curry",
                    price: 375,
                    rating: 4.3,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                }]
        },
        {
            id: 5,
            label: "Indian Breads",
            items: [
                {
                    name: "Chicken Boneless Curry",
                    price: 370,
                    rating: 4.5,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                },
                {
                    name: "Butter Chicken Curry",
                    price: 375,
                    rating: 4.3,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                }]
        },
        {
            id: 6,
            label: "Non-veg Biriyani",
            items: [
                {
                    name: "Chicken Boneless Curry",
                    price: 370,
                    rating: 4.5,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                },
                {
                    name: "Butter Chicken Curry",
                    price: 375,
                    rating: 4.3,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                }]
        },
        {
            id: 7,
            label: "Non-veg Curries",
            items: [
                {
                    name: "Chicken Boneless Curry",
                    price: 370,
                    rating: 4.5,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                },
                {
                    name: "Butter Chicken Curry",
                    price: 375,
                    rating: 4.3,
                    imageId: "https://placehold.co/234x216/e8b887/ffffff?text=Chicken+Curry",
                    ratingCount: 1000
                }]
        }
    ]

    return (
        <div>
            <div className="mx-auto w-full max-w-[620px] bg-white px-3 pt-4">
                {/* Restaurant name */}
                <h1 className="px-3 text-[22px] font-extrabold text-gray-900">Meghana Foods</h1>

                {/* Tabs */}
                <div className="mt-3 flex gap-6 px-3">
                    <button
                        type="button"
                        className="border-b-2 border-orange-600 pb-1.5 text-[13px] font-semibold text-gray-900"
                    >
                        Order Online
                    </button>
                    <button type="button" className="pb-1.5 text-[13px] font-semibold text-gray-500">
                        Dineout
                    </button>
                </div>

                {/* Hero image */}
                <div className="h-[240px] w-full overflow-hidden rounded-2xl">
                    <img
                        src="https://placehold.co/1200x480/e8a33d/ffffff?text=Meghana+Foods"
                        alt="Meghana Foods"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Rating + cost */}
                <div className="mt-3 flex items-center gap-1.5 px-3 text-[13px] font-bold text-gray-900">
                    <StarBadge />
                    <span>4.5 (128K+ ratings)</span>
                    <span className="text-gray-400">•</span>
                    <span>₹500 for two</span>
                </div>

                {/* Cuisines */}
                <p className="mt-1 px-3 text-[12px] font-bold text-orange-600 underline">Biryani, Andhra</p>

                {/* Open status */}
                <div className="mt-1.5 flex items-center gap-1.5 px-3 text-[12px]">
                    <span className="font-semibold text-green-600">Open now</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">Closes 12:00 am</span>
                    <svg className="h-2 w-2 text-orange-600" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                        <path d="M1 3l4 4 4-4z" />
                    </svg>
                </div>

                {/* Outlet + delivery time */}
                <div className="mt-3 w-[250px] border-t border-gray-200 px-3 pt-3">
                    <div className="flex gap-3">
                        {/* Timeline connector */}
                        <div className="flex flex-col items-center py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                            <span className="my-0.5 w-px flex-1 bg-gray-300" />
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                        </div>

                        <div className="flex flex-col gap-3 text-[12px]">
                            <p>
                                <span className="font-bold text-gray-900">Outlet</span>
                                <span className="ml-2 text-gray-500">Indiranagar</span>
                            </p>
                            <p className="font-bold text-gray-900">65-75 mins</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-4 border-t border-gray-200" />

                {/* Search bar */}
                <div className="mt-3 px-3 pb-4">
                    <div className="relative flex h-10 items-center justify-center rounded-xl bg-gray-200">
                        <span className="text-[13px] font-semibold text-gray-600">Search for dishes</span>
                        <span className="absolute right-3">
                            <SearchIcon />
                        </span>
                    </div>
                </div>
            </div>
            {
                restInfo.map((category, i) => (
                    <RestaurantCategory
                        key={category.id}
                        category={category}
                        showItem={i === showIndex ? true : false}
                        setShowIndex={(status) => { status ? setShowIndex(null) : setShowIndex(i) }}
                    />
                ))
            }
        </div>
    );
}

export default RestraurantMenu;