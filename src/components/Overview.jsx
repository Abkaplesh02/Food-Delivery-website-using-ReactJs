const Overview = ()=>{
    return (
        <div>

                <div className="shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10">
                    <h1 className=" p-1 text-2xl">Average Cost</h1>
                    <p className="text-lg p-1">💰400 for two people (approx)</p>
                    <p className="text-md p-1 text-gray-400">Exclusive of applicable taxes and charges , if any</p>
                    <p className=" p-1 border-b-2 border-dotted text-gray-300 border-gray-400 text-sm">How do we calculate cost for two?</p>
                    <p className="text-lg p-1 text-gray-400">Cash, cards and Meal coupons accepted</p>
                </div>

                <div className="shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10 ">
                    <h1 className=" p-1  pb-8 text-2xl">More Info</h1>
                    <div className="flex justify-between flex-wrap text-2xl">
                        <p>✅ Breakfast</p>
                        <p>✅ Home Delivery</p>
                        <p>✅ Takeaway Available</p>
                        <p>✅ Indoor Seating</p>
                    </div>
                </div>
                </div>
    )
}

export default Overview;