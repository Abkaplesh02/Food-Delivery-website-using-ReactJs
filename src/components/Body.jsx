import { Link } from "react-router";
import { BRAKING, BURGER, BURGER_KING, DRDIET, GOPAL, Gulab, ICE_Cream, JNJ, LAP, MCD, PIZZA, ROLLEXPRESS, Rolls, SUBWAY, THALI, VEG_MEAL } from "../utils/constants";
import restList from "../utils/mockData";
import RestCard from "./RestCard";
import { useState } from "react";

const Body = () =>{

    const [filtered,SetFiltered]=useState(restList);
    
    console.log(filtered);

    const filterByKeyword = (keyword)=>{
        const filteredList=restList.filter((e)=>e.info.name.toLowerCase().includes(keyword.toLowerCase()));
        SetFiltered(filteredList);
    }
    
   

    const handleClickTop = ()=>{
        const filteredList=restList.filter((e)=>e.info.rating.aggregate_rating>=4.0);
        SetFiltered(filteredList);
    }

    const handleClickWorst = ()=>{
        const filteredList=restList.filter((e)=>e.info.rating.aggregate_rating<3.0);
        SetFiltered(filteredList);
    }

    const handleClickAll = ()=>{
        const filteredList=restList;
        SetFiltered(filteredList);
    }

    const handlePizza = () =>{
        filterByKeyword("Pizza")
    }   
    
    const handleBurger = () =>{
        filterByKeyword("Burger")
    }

    const handleSweet = ()=>{
        filterByKeyword("Sweet")
    }

    const handleRolls =()=>{
        filterByKeyword("Rolls")
    }

    const handleThali =()=>{
        filterByKeyword("dhaba")
    }

    const handleCold =()=>{
        filterByKeyword("ICE")

    }
    const handleBurgerKing=()=>{
        filterByKeyword("Burger King")
    }
    const handleMCD = ()=>{
        filterByKeyword("MCD")
    }
    const handleRoll= ()=>{
        filterByKeyword("Roll express")
    }
    const handleGopal=()=>{
        filterByKeyword("Gopal")
    }
    const handleBrownBaking=()=>{
        filterByKeyword("Baking")
    }
    const handleLAP=()=>{
        filterByKeyword("LA pino")
    }
    

    return(
        <div className="bg-gray-100 mt-[-4px] p-6">

            {/* Buttons on body top */}
            <div className="flex justify-between mx-14 pb-[5vh]">
                <button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800" onClick={handleClickTop}>Top rated restaurants</button>
                <button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800" onClick={handleClickWorst}>Worst restaurants</button>
                <button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800" onClick={handleClickAll}>All restaurants</button>
            </div>

            {/* Food icons for order */}
            <div className="bg-gray-200 mx-[-22px] px-[8vw] py-10 pb-14 mb-[5vh]">
                <h1 className="text-[3rem] py-12">Inspiration for your first order</h1>
                <div>
                    <ul className="flex ">
                        <li onClick={handlePizza} className=" cursor-pointer w-2/12"><div><img className="h-[19vh] w-[75%] rounded-full" src={PIZZA}/><h1 className="text-center w-8/12 pt-6 text-2xl">Pizza</h1></div></li>
                        <li onClick={handleBurger} className="cursor-pointer w-2/12"><div><img className="h-[19vh] w-[75%]  " src={BURGER}/><h1 className="text-center w-8/12 pt-6 text-2xl">Burger</h1></div></li>
                        <li  onClick={handleSweet} className="cursor-pointer w-2/12"><div><img className=" w-[75%] h-[19vh] rounded-full" src={Gulab}/><h1 className="text-center w-8/12 pt-6 text-2xl">Sweets</h1></div></li>
                        <li  onClick={handleRolls} className="cursor-pointer w-2/12"><div><img className="h-[19vh] w-[75%] " src={Rolls}/><h1 className="text-center w-8/12 pt-6 text-2xl">Rolls</h1></div></li>
                        <li onClick={handleThali} className="cursor-pointer w-2/12"><div><img className="h-[19vh] w-[75%] rounded-full " src={VEG_MEAL} /><h1 className="text-center w-8/12 pt-6 text-2xl">Thali</h1></div></li>
                        <li onClick={handleCold} className=" cursor-pointer w-2/12"><div><img className="h-[19vh] w-[75%] rounded-full " src={ICE_Cream} /><h1 className="text-center w-8/12 pt-6 text-2xl">Ice Cream</h1></div></li>
                    </ul>
                </div>
            </div>


            {/* Top brands for you */}
            <div className="bg-gray-200 mx-[-22px] px-[8vw] py-10 pb-14 mb-[5vh]">
                <h1 className="text-[3rem] py-12">Top brands for you</h1>
                <div>
                    <ul className="flex justify-between">
                        <li onClick={handleBurgerKing} className="w-2/12  items-center"><div className=""><img className=" cursor-pointer w-[75%] h-[19vh] rounded-full" src={BURGER_KING}/><h1 className="text-center w-8/12 pt-6 text-2xl">Burger King</h1></div></li>
                        <li onClick={handleMCD} className="w-2/12"><div><img className="h-[19vh] w-[75%] rounded-full cursor-pointer" src={MCD}/><h1 className="text-center w-8/12 pt-6 text-2xl">MCD</h1></div></li>
                        <li onClick={handleRoll} className="w-2/12"><div><img className="h-[19vh] w-[75%] rounded-full cursor-pointer" src={ROLLEXPRESS}/><h1 className="text-center w-8/12 pt-6 text-2xl">Roll Express</h1></div></li>
                        <li onClick={handleGopal} className="w-2/12"><div><img className="h-[19vh] w-[75%] cursor-pointer rounded-full" src={GOPAL}/><h1 className="text-center w-8/12 pt-6 text-2xl">Dr. Diet - Daily Healthy Diet</h1></div></li>
                        <li onClick={handleBrownBaking} className="w-2/12"><div><img className="h-[19vh] w-[75%] rounded-full cursor-pointer" src={BRAKING} /><h1 className="text-center w-8/12 pt-6 text-2xl">Brown Baking Company</h1></div></li>
                        <li onClick={handleLAP} className="w-2/12"><div><img className="h-[19vh] w-[75%] rounded-full cursor-pointer" src={LAP} /><h1 className="text-center w-8/12 pt-6 text-2xl">La pino'z Pizza</h1></div></li>
                    </ul>
                </div>
            </div>


            {/*RestCards for you  */}
            <div className="bg-gray-100 mx-[-22px] px-[10vw] py-10 pb-14 mb-[5vh]">
                <h1 className="text-[3rem] py-12">Chandigarh Area Restaurants</h1>
                <div className="flex justify-between flex-wrap ">
                {
                    filtered.map((e)=><Link key={e.info.resId} to={"/restaurant"+e.order.actionInfo.clickUrl}><RestCard  data={e}/></Link>)
                }
                </div>
                </div>

        </div>
    )
}

export default Body;