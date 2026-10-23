import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ChevronRight = () => (
    <svg
        className="h-3 w-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M9 6l6 6-6 6" />
    </svg>
);

const NonVegIcon = () => (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-red-500">
        <span className="h-0 w-0 border-x-[4px] border-b-[7px] border-x-transparent border-b-red-500" />
    </span>
);

const StarIcon = () => (
    <svg className="h-3 w-3 text-green-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const ItemList = ({ item }) => {

    const { name, price, rating, ratingCount } = item;
    const dispatch = useDispatch();

    function handleAddToCart(item) {
        dispatch(addToCart({ item }))
    }

    return (
        <div className="flex items-start justify-between border-b border-gray-300 pb-5 pt-2">
            <div className="pr-4">
                <NonVegIcon />
                <h4 className="mt-1 text-[15px] font-semibold text-gray-700">{name}</h4>
                <p className="mt-0.5 text-[14px] font-semibold text-gray-900">₹{price}</p>
                <div className="mt-1 flex items-center gap-1 text-[11px]">
                    <StarIcon />
                    <span className="font-bold text-green-800">{rating}</span>
                    <span className="text-gray-600">({ratingCount}+)</span>
                </div>
                <button
                    type="button"
                    className="mt-2 inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600"
                >
                    More Details
                    <ChevronRight />
                </button>
            </div>

            <div className="relative h-[108px] w-[117px] shrink-0">
                <img
                    src={item.imageId}
                    alt="Chicken Boneless Curry"
                    className="h-full w-full rounded-xl object-cover"
                />
                <button
                    type="button"
                    className="absolute -bottom-1 left-1/2 w-[90px] -translate-x-1/2 rounded-lg border border-gray-300 bg-white py-1.5 text-[14px] font-bold text-green-600 shadow-md cursor-pointer"
                    onClick={() => handleAddToCart(item)}
                >
                    ADD
                </button>
            </div>
        </div>
    )
}

export default ItemList;