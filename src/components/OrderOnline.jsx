import react from "react";
import { useParams } from "react-router";
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
        setSelectedCategory(categoryName);
    }

    return (
        <div> 
                <div className="shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10 flex justify-between">
               
                <div className="w-4/12 border-r-2 border-gray-300">
                    <ul>
                        {
                            data.page_data.order.menuList.menus.map((e)=><li className=" py-4 text-gray-500 text-2xl border-b-2 border-gray-200" key={e.menu.id} onClick={()=>handleCategory(e.menu.name)}>{e.menu.name} </li>)
                        }
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

                        {/* {
                            data.page_data.order.menuList.menus.map((e)=(<h1>{e.menu.name}</h1>)>e.menu.categories[0].category.items.map((e)=><RestMenuCard data={e.item}/>))
                        } */}
                        {/* {data.page_data.order.menuList.menus.filter((menu) =>menu.menu.name===selectedCategory).map((menu)=>menu.menu.categories.map((category) =>category.category.items.map((item) => (<RestMenuCard key={item.item.id} data={item.item} />
                ))
              )
            )} */}


{data.page_data.order.menuList.menus
              .filter((menu) => menu.menu.name === selectedCategory)
              .map((menu) =>
                menu.menu.categories.map((category) =>
                  category.category.items.map((item) => (
                    <RestMenuCard key={item.item.id} data={item.item} />
                  ))
                )
              )}



                    </div>

                    
              </div>
                </div>


                </div>
    )
}

export default OrderOnline;