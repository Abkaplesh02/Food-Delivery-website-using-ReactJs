import { useEffect, useState } from "react";
import { ZomApi } from "./constants";

const useMenuHook =(restPath)=>{
    const [Menu,setMenu]=useState(null);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(ZomApi+restPath);
        console.log(ZomApi+restPath);
        const json=await data.json();
        setMenu(json);

    }

    return Menu;


}

export default useMenuHook;