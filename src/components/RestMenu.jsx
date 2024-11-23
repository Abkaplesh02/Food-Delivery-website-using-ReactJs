import { Link} from "react-router";
import RestMenuCard from "./RestMenuCard";
import RestReview from "./RestReview";

const RestMenu =()=>{
    return(
        <div >
            <div className="p-10 shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10">

                {/* Main heading */}
                
                <div className="flex justify-between">
                    <h1 className="text-5xl">Dominos's Pizza</h1>

                    <div className="flex justify-between">
                    <div className="flex p-4">
                    <button className="bg-gray-400 mr-2 h-[28px]" >-⭐</button>
                    <div>
                        <p>3</p>
                        <p>Dining Ratings</p>
                    </div>
                    </div>

                    <div className="flex p-4">
                    <button className="bg-green-600 h-[28px] mr-2">⭐</button>
                    <div>
                        <p>726</p>
                        <p>Delivery Ratings</p>
                    </div>
                    </div>
                    </div>
                    </div>




                    <div>
                        <p className=" p-2 text-2xl text-gray-800">Pizza , Italian , Fast Food , Deserts </p>
                        <p className="  p-2 text-2xl text-gray-500">Chandigarh Industrial Area , Chandigarh</p>
                        <div className=" flex text-xl text-gray-500"><p className=" p-2 border-r-2 border-gray-600">Open now - 11am -12midnight(Today)</p>
                        <p className=" p-2">📞+91345123453</p></div>
                        <div className="flex justify-start text-xl pt-5 p-2">
                        <button className=" mr-4 rounded-lg p-1 text-gray-700 border-2 border-gray-900">🎯Direction</button>
                        <button className=" mr-4 rounded-lg p-1 text-gray-700 border-2 border-gray-900">⏩Share</button>
                        <button className=" mr-4 rounded-lg p-1 text-gray-700 border-2 border-gray-900">Ⓜ️Reviews</button></div>
                    </div>
                </div>



                <div className="mb-5">
                    <div className="w-10/12 mx-auto" >
                    <ul className="flex justify-between text-3xl">
                        <Link><li>Overview</li></Link>
                        <Link><li>Order Online</li></Link>
                        <Link><li>Reviews</li></Link>
                        <Link><li>Photos</li></Link>
                        <Link><li>Menu</li></Link>
                    </ul>
                    </div>
                </div>

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


                <div className="shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10 flex justify-between">
                <div className="w-4/12 border-r-2 border-gray-300">
                    <ul>
                        <Link><li className=" py-4 text-gray-500 text-2xl">Today's Exclusice Dishes (3)</li></Link>
                        <Link><li className=" py-4 text-gray-500 text-2xl">Cheese Burst - 3 New Flavours (22)</li></Link>
                        <Link><li className=" py-4 text-gray-500 text-2xl">Cheese Volcano (8)</li></Link>
                        <Link><li className=" py-4 text-gray-500 text-2xl">Party Combo (11)</li></Link>
                        <Link><li className=" py-4 text-gray-500 text-2xl">Value Meals (18)</li></Link>
                        <Link><li className=" py-4 text-gray-500 text-2xl">Dominos Classics (14)</li></Link>
                        <Link><li className=" py-4 text-gray-500 text-2xl">Loaded Pizza (9)</li></Link>
                        <Link><li className=" py-4 text-gray-500 text-2xl">Flavours of India (5)</li></Link>
                    </ul>
                </div>


                <div className="w-8/12">

                    <div className="flex justify-between mb-5"><h1 className="px-5 text-3xl">Order Online</h1>
                    <input type="text" placeholder="🔎 Search within menu  " className="border-2 border-gray-700 rounded-full py-5 px-10 w-[25vw] " />
                    </div>
                    <span className="text-lg text-gray-500 border-r-2 border-gray-300 px-5"> 🧭 Live track your order</span>
                    <span className="text-lg text-gray-500 px-2">⌚ 29 min</span>
                    <div className="px-5 mt-5 text-lg text-gray-600 px-6"><input className="mr-3 " type="checkbox" /> Veg Only</div>

                    <div className="">
                    <RestMenuCard/>
                    <RestMenuCard/>
                    <RestMenuCard/>
                    <RestMenuCard/>
                    <RestMenuCard/>
                    </div>

                    
              </div>
                </div>

                <div className="shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10 flex justify-between">
                <div className="w-[100%]"> <RestReview/> <RestReview/> <RestReview/></div>
                </div>



            </div>
            
       
    )
}

export default RestMenu;