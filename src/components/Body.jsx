import { Link } from "react-router";
import { BRAKING, BURGER, BURGER_KING, DRDIET, ICE_Cream, JNJ, PIZZA, ROLLEXPRESS, Rolls, SUBWAY, THALI, VEG_MEAL } from "../utils/constants";
import restList from "../utils/mockData";
import RestCard from "./RestCard";

const Body = () =>{
    
    

    return(
        <div className="bg-gray-100 mt-[-4px] p-6">

            {/* Buttons on body top */}
            <div className="flex justify-between mx-14 pb-[5vh]">
                <button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800">Top rated restaurants</button>
                <button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800">Worst restaurants</button>
                <button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800">Closest restaurants</button>
                <button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800">All restaurants</button>
            </div>

            {/* Food icons for order */}
            <div className="bg-gray-200 mx-[-22px] px-[8vw] py-10 pb-14 mb-[5vh]">
                <h1 className="text-[3rem] py-12">Inspiration for your first order</h1>
                <div>
                    <ul className="flex ">
                        <li className="w-2/12  items-center"><div className=""><img className="cursor-pointer w-[75%] rounded-full" src={PIZZA}/><h1 className="text-center w-8/12 pt-6 text-2xl">Pizza</h1></div></li>
                        <li className="w-2/12"><div><img className=" cursor-pointer w-[75%]  " src={BURGER}/><h1 className="text-center w-8/12 pt-6 text-2xl">Burger</h1></div></li>
                        <li className="w-2/12"><div><img className="cursor-pointer w-[75%] rounded-full" src={THALI}/><h1 className="text-center w-8/12 pt-6 text-2xl">Sandwich</h1></div></li>
                        <li className="w-2/12"><div><img className="w-[75%] cursor-pointer" src={Rolls}/><h1 className="text-center w-8/12 pt-6 text-2xl">Rolls</h1></div></li>
                        <li className="w-2/12"><div><img className="w-[75%] rounded-full cursor-pointer" src={VEG_MEAL} /><h1 className="text-center w-8/12 pt-6 text-2xl">Thali</h1></div></li>
                        <li className="w-2/12"><div><img className="w-[75%] rounded-full cursor-pointer" src={ICE_Cream} /><h1 className="text-center w-8/12 pt-6 text-2xl">Cold Coffee</h1></div></li>
                    </ul>
                </div>
            </div>


            {/* Top brands for you */}
            <div className="bg-gray-200 mx-[-22px] px-[8vw] py-10 pb-14 mb-[5vh]">
                <h1 className="text-[3rem] py-12">Top brands for you</h1>
                <div>
                    <ul className="flex justify-between">
                        <li className="w-2/12  items-center"><div className=""><img className=" cursor-pointer w-[75%] rounded-full" src={BURGER_KING}/><h1 className="text-center w-8/12 pt-6 text-2xl">Burger King</h1></div></li>
                        <li className="w-2/12"><div><img className="w-[75%] rounded-full cursor-pointer" src={SUBWAY}/><h1 className="text-center w-8/12 pt-6 text-2xl">Subway</h1></div></li>
                        <li className="w-2/12"><div><img className="w-[75%] rounded-full cursor-pointer" src={ROLLEXPRESS}/><h1 className="text-center w-8/12 pt-6 text-2xl">Roll Express</h1></div></li>
                        <li className="w-2/12"><div><img className="w-[75%] cursor-pointer" src={DRDIET}/><h1 className="text-center w-8/12 pt-6 text-2xl">Dr. Diet - Daily Healthy Diet</h1></div></li>
                        <li className="w-2/12"><div><img className="w-[75%] rounded-full cursor-pointer" src={BRAKING} /><h1 className="text-center w-8/12 pt-6 text-2xl">Brown Baking Company</h1></div></li>
                        <li className="w-2/12"><div><img className="w-[75%] rounded-full cursor-pointer" src={JNJ} /><h1 className="text-center w-8/12 pt-6 text-2xl">JNJ'S</h1></div></li>
                    </ul>
                </div>
            </div>


            {/*RestCards for you  */}
            <div className="bg-gray-100 mx-[-22px] px-[10vw] py-10 pb-14 mb-[5vh]">
                <h1 className="text-[3rem] py-12">Chandigarh Area Restaurants</h1>
                <div className="flex justify-between flex-wrap ">
                {
                    restList.map((e)=><Link key={e.info.resId} to={"/restaurant"+e.order.actionInfo.clickUrl}><RestCard  data={e}/></Link>)
                }
                </div>
                </div>

        </div>
    )
}

export default Body;