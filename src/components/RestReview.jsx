import contact from "../attributes/contact.png"; 
const RestReview = () =>{
    return(
        <div className="mx-5 my-10 border-b-2 border-gray-700 pb-10">
            <h1 className="text-3xl text-gray-800 py-5">Domino's Pizza Reviews</h1>
            <div className="flex justify-between py-5"><p>All Reviews 🔽</p> <p>📃 Newest First 🔽</p></div>

            <div>

                <div className="flex justify-between">
                    <div className="flex">
                    <div>
                        <img src={contact} alt="" />
                    </div>
                    <div><h1 className="text-xl text-gray-900 ">Dhiraj Kumar</h1><p className="text-lg text-gray-500 ">0 reviews 0 Followers</p></div></div>
                    <div><button className="text-xl text-red-600 border-2 p-2 rounded-xl border-red-600">Follow</button></div>
                </div>
                <div className="flex ">
                    <button className="bg-red-600 rounded-lg text-white mr-3 p-1">1⭐</button> <p>DELIVERY</p><p className="text-gray-500 ml-4">yesterday</p>
                </div>
                <h1 className="text-xl text-gray-500 py-2">In complete order was delivered</h1>
                <h1 className="text-lg text-gray-400 py-2">O Votes for helpful , 0 Comments</h1>
                <div className="text-lg text-gray-400">
                    <button className="mr-4">👍Helpful</button>
                    <button className="mr-4">📃Comment</button>
                    <button className="mr-4">⏩Share</button>
                </div>

            </div>
        </div>
    )
}

export default RestReview;