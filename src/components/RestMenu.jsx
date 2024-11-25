import { Link, useParams} from "react-router";
import RestMenuCard from "./RestMenuCard";
import RestReview from "./RestReview";
import useMenuHook from "../utils/useMenuHook";
import ShimmerItems from "./ShimmerItems";
import { useState } from "react";
import Photos from "./Photos";
import Overview from "./Overview";
import OrderOnline from "./OrderOnline";


const RestMenu =()=>{
    const {"*" : restPath}=useParams();
    const [activeSection,setActiveSection]=useState("Overview");
    const data=useMenuHook(restPath);


    if(data==null){
        return <ShimmerItems/>
    }
    return(
        <div >
            <div className="p-10 shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10">

                {/* Main heading */}
                
                <div className="flex justify-between">
                    <h1 className="text-5xl">{data.page_data.sections.SECTION_BASIC_INFO.name}</h1>

                    <div className="flex justify-between">
                    <div className="flex p-4">
                    <button className="bg-gray-400 mr-2 h-[28px]" >-⭐</button>
                    <div>
                        <p>{data.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DINING.reviewCount}</p>
                        <p>Dining Ratings</p>
                    </div>
                    </div>

                    <div className="flex p-4">
                    <button className="bg-green-600 h-[28px] mr-2 text-white">{data.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DELIVERY.rating}⭐</button>
                    <div>
                        <p>{data.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DELIVERY.reviewCount}</p>
                        <p>Delivery Ratings</p>
                    </div>
                    </div>
                    </div>
                    </div>


                    <div>
                        <p className=" p-2 text-2xl text-gray-800">{data.page_data.sections.SECTION_BASIC_INFO.cuisine_string}</p>
                        <p className="  p-2 text-2xl text-gray-500">{data.page_data.sections.SECTION_RES_CONTACT.locality_verbose}</p>
                        <div className=" flex text-xl text-gray-500"><p className=" p-2 border-r-2 border-gray-600">Open now - 11am -12midnight(Today)</p>
                        <p className=" p-2">📞{data.page_data.sections.SECTION_RES_CONTACT.phoneDetails.phoneStr}</p></div>
                        <div className="flex justify-start text-xl pt-5 p-2">
                        <Link to={data.page_data.sections.SECTION_RES_CONTACT.static_map_url}><button className=" mr-4 rounded-lg p-1 text-gray-700 border-2 border-gray-900">🎯Direction</button></Link>
                        <Link to={data.page_data.sections.SECTION_USER_ACTIONS.share.url}><button className=" mr-4 rounded-lg p-1 text-gray-700 border-2 border-gray-900">⏩Share</button></Link>
                        <button className=" mr-4 rounded-lg p-1 text-gray-700 border-2 border-gray-900" onClick={()=>setActiveSection("Reviews")}>Ⓜ️Reviews</button></div>
                    </div>

                    
                </div>



                <div className="mb-5">
                    <div className="w-10/12 mx-auto border-b-2 border-gray-200" >
                    <ul className="flex justify-between text-3xl">
                        <Link><li className={` ${activeSection==="Overview" ?"border-b-2 border-red-500 text-red-600 shadow-3xl" : ""}`} onClick={()=>setActiveSection("Overview")}>Overview</li></Link>
                        <Link><li className={` ${activeSection==="OrderOnline" ?"border-b-2 border-red-500 text-red-600 shadow-3xl" : ""}`} onClick={()=>setActiveSection("OrderOnline")}>Order Online</li></Link>
                        <Link><li className={` ${activeSection==="Reviews" ?"border-b-2 border-red-500 text-red-600 shadow-3xl" : ""}`} onClick={()=>setActiveSection("Reviews")}>Reviews</li></Link>
                        <Link><li className={` ${activeSection==="Photos" ?"border-b-2 border-red-500 text-red-600 shadow-3xl" : ""}`} onClick={()=>setActiveSection("Photos")}>Photos</li></Link>
                        <Link><li>Menu</li></Link>
                    </ul>
                    </div>
                </div>

               {activeSection==="Overview" && <Overview/>
}
                
               { activeSection==="OrderOnline" &&  <OrderOnline/>}

                { activeSection==="Reviews" && <div>
                <div className="shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10 flex justify-between">
                <div className="w-[100%]"> <RestReview/> <RestReview/> <RestReview/></div>
                </div>
                </div>
                   }


                 {
                 activeSection==="Photos" && <Photos/>
                     }




            </div>
            
       
    )
}

export default RestMenu;