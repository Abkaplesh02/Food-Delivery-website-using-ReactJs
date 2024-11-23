import { useEffect, useState } from "react"
import { GIT_API } from "./constants";

const useGITDATA = () =>{
    const [Profile,setProfile]=useState();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data=await fetch(GIT_API);
        const json=await data.json();
        setProfile(json);
    }

    return Profile;

}

export default useGITDATA;