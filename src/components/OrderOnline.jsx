import react from "react";
import { Link, useParams } from "react-router";
import useMenuHook from "../utils/useMenuHook";
import ShimmerItems from "./ShimmerItems";
import RestMenuCard from "./RestMenuCard";
import { useState } from "react";

const OrderOnline = ()=>{

    const {"*" : restPath}=useParams();
    const [selectedCategory,setSelectedCategory]=useState(null);
    const data=useMenuHook(restPath);
   

    console.log(data);

    if(data==null){
        return <ShimmerItems/>
    }

    const handleCategory = (categoryName)=>{
      if(categoryName===selectedCategory){
        setSelectedCategory(null)
      }
      else{
        setSelectedCategory(categoryName);
      }
        
    }


    return (
        <div> 
                <div className="shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10 flex justify-between">
               
                <div className="w-4/12 border-r-2 border-gray-300">
                    <ul>
                        {
                            data.page_data.order.menuList.menus.map((e)=><Link key={e.menu.id} onClick={()=>handleCategory(e.menu.name)}><li  className={`cursor-pointer py-4 text-gray-500 text-2xl border-b-2 border-gray-200 ${selectedCategory===e.menu.name ?"border-b-2 border-red-500 text-red-600 shadow-3xl" : ""}`}  >{e.menu.name} </li></Link>)
                        }
                    </ul>
                </div>


                <div className="w-8/12">

                    <div className="flex justify-between mb-5"><h1 className="px-5 text-3xl">Order Online</h1>
                    <input type="text" placeholder="🔎 Search within menu  " className="border-2 border-gray-700 rounded-full py-5 px-10 w-[25vw] " />
                    </div>
                    <span className="text-lg text-gray-500 border-r-2 border-gray-300 px-5"> 🧭 Live track your order</span>
                    <span className="text-lg text-gray-500 px-2">⌚ 29 min</span>
                    <div className="px-5 mt-5 text-lg text-gray-600 px-6"><input className="mr-3 " type="checkbox"  /> Veg Only</div>

                    <div className="">


              {
                data.page_data.order.menuList.menus.filter((e)=>e.menu.name===selectedCategory).map((e)=>e.menu.categories.map((e)=>e.category.items.map((e)=>(<RestMenuCard key={e.item.id} data={e.item}/>))))
              }

                    </div>

                    
              </div>
                </div>


                </div>
    )
}

export default OrderOnline;