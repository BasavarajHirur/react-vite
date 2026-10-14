import ItemList from "./ItemList";

const ChevronDown = () => (
    <svg
        className="h-5 w-5 text-gray-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);

const ChevronUp = () => (
    <svg
        className="h-5 w-5 text-gray-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M18 15l-6-6-6 6" />
    </svg>
);

const RestaurantCategory = ({ category, showItem, setShowIndex }) => {
    const { label, items } = category;

    const setShowCategory = () => {
        setShowIndex(showItem);
    }

    return (
        <div className="mx-auto w-full max-w-[600px] bg-[#f3f3f3]" >

            <div className="mt-1.5 bg-white px-3 cursor-pointer">
                <div className="flex items-center justify-between py-4" onClick={setShowCategory}>
                    <h3 className="text-[15px] font-bold text-gray-900">{label}
                        <span className="font-bold text-lg">
                            ({items.length})
                        </span>
                    </h3>
                    {
                        showItem ? <ChevronDown /> : <ChevronUp />
                    }
                </div>
                {
                    showItem && (
                        <div className="transition-all duration-500 ease-in-out">
                            {items.map((item, index) => (
                                <ItemList key={index} item={item} />
                            ))}
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default RestaurantCategory;