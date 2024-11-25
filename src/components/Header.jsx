import { useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () =>{
    const[login,setLogin]=useState("Login");

    const handleClick = ()=>{
        {
            login==="Login" ? setLogin("Logout") : setLogin("Login");
        }
    }
    return (
        <div className="font-bold flex justify-between items-center m-1 p-5 border border-gray-500 bg-gray-700 text-white lg:bg-gray-900 sm:bg-gray-950   ">
            <div className=""><Link to="/home"> 
                <img className="w-[170px] p-2 cursor-pointer rounded-full" src={HEADER_LOGO_URL} alt="LOGO_IMAGE" /></Link>
            </div>
            <div className="flex ">
                <input className="py-4 px-8 w-[40vw] cursor-text text-gray-950" type="text" placeholder="🔎 Search for restaurant , cuisine or a dish" />
                <button className="bg-white text-gray-800  py-4 px-8 border-l-4 border-gray-800">Search</button>
            </div>
            <div className="mr-10 ">
                <ul className="flex py-10  text-3xl">
                   <Link to="/home"><li className="py-4 px-10  hover:border-white hover:border-2 cursor-pointer">Home</li></Link>
                   <Link to="/about"><li className="py-4 px-10  hover:border-white hover:border-2 cursor-pointer" >About</li></Link>
                   <Link to="/cart"><li className="py-4 px-10  hover:border-white hover:border-2 cursor-pointer">Cart</li></Link>
                   <Link to="/user"><li className="py-4 px-10  hover:border-white hover:border-2 cursor-pointer">User</li></Link>
                   <li className="py-4 px-10  hover:border-white hover:border-2 cursor-pointer" onClick={handleClick}>{login}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;