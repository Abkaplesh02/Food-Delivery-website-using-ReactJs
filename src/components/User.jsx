import { useState } from "react";
import About from "./About";
import { useDispatch } from "react-redux";
import { updateName } from "../Redux/userSlice";
// import { updateName } from "../Redux/userSlice";


const User = ()=>{
    const[userName,setUserName]=useState("");
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        const user=e.target.value;
        setUserName(user);
        dispatch(updateName(user));
    }
   
   
    return (
            <div>
             <div className="p-10 shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-[5vh]  text-center">
             <h1 className="text-3xl my-[5vh]">Set User 😎 </h1>
             <input type="text" className="border-2 border-gray-700 p-3 w-[40vw]" placeholder=" 🔎 Enter userName 😎" value={userName} onChange={handleChange}/>
             </div>
            <About/>
            </div>
    )
}

export default User;