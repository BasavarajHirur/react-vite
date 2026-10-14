const Shimmer = () => {
    const shimmerElements = [1, 2, 3, 4];

    return (
        <div className="restaurant-list">
            {
                shimmerElements.map((el, i) => (
                    <div className="w-full" key={i}>
                        <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-md">
                            <img src="" alt="" className="h-full w-full object-cover" />
                        </div>

                        <div className="px-2 pt-3">
                            <h3 className="truncate text-[17px] font-bold leading-tight text-gray-900"></h3>

                            <div className="mt-0.5 flex items-center gap-1 text-[14px] font-medium text-gray-900">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <p className="mt-1 truncate text-[14px] text-gray-500"></p>
                            <p className="truncate text-[14px] text-gray-500"></p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Shimmer;