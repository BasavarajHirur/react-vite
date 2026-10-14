import { useState, useEffect } from "react";
import RestaurantCard from "./restaurantCard";
import { RESTAURANT_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function Body() {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.warn('parent render')


    //If no dependency array is provided, the useEffect will run after every render of the component. 
    // If an empty dependency array is provided, the useEffect will run only once after the initial render of the component. 
    // If a dependency array with variables is provided, the useEffect will run after the initial render and whenever any of the variables in the dependency array change.
    useEffect(() => {
        console.log('parent useEffect');
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const res = await fetch(RESTAURANT_API);
            const data = await res.json();
            console.log(data);
            console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    }

    const getFilterRestaurants = () => {
        console.log(searchText);
        const filtered = restaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }

    const topRestaurants = () => {
        const filtered = restaurants.filter((restaurant) => restaurant.info.avgRating > 4.5);
        setFilteredRestaurants(filtered);
    }

    return restaurants.length === 0 && filteredRestaurants.length === 0 ?
        <div>Loading...</div>
        :
        (<main className="mx-auto max-w-[1200px] px-4 py-8 sm:px-8">
            <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search restaurants..."
                        className="w-64 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-orange-500"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={getFilterRestaurants}
                        className="rounded-lg bg-orange-500 px-4 py-2 font-medium text-white hover:bg-orange-600"
                    >
                        Search
                    </button>
                </div>

                <button
                    onClick={topRestaurants}
                    className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-100"
                >
                    Top Rated
                </button>
            </div>

            <h2 className="mb-5 text-2xl font-bold text-gray-900">Restaurants Near You</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredRestaurants.map((filteredRestaurant) => (
                    <Link
                        key={filteredRestaurant.info.id}
                        to={`/restaurant/${filteredRestaurant.info.id}`}
                        className="block transition-transform duration-200 hover:scale-[0.97]"
                    >
                        <RestaurantCard restaurant={filteredRestaurant.info} />
                    </Link>
                ))}
            </div>
        </main>)
}

export default Body;