import { HEADER_LOGO_URL } from "../utils/constants";
import facebook from "../attributes/facebook.png";
import instagram from "../attributes/instagram.png";
import linkedin from "../attributes/linkedin.png";
import twitter from "../attributes/twitter.png";

const Footer = ()=>{
    return (
        <div className="p-[100px]  bg-gray-200 mx-[-22px] px-[10vw] py-10 pb-14 mb-[5vh] ">
           <div className="flex justify-between pb-[15vh] p-6">
            <span className="w-1/12"><img className="rounded-full" src={HEADER_LOGO_URL} alt="" /></span>
            <div className=""><button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800 mr-10">🇮🇳 INDIA</button>
            <button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800">🌐 ENGLISH</button>
            </div>
           </div>


           <div className="flex justify-between p-6 ml-[1vw]">
            <div>
                <ul className="text-gray-500 text-lg">
                <li className="font-bold text-xl text-black pb-2">ABOUT FOODIE</li>
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Work With Us</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
                <li>Press Kit</li>
                <li>Contact Us</li>
                </ul>
            </div>
            <div>
            <ul className="text-gray-500 text-lg">
                    <li className="font-bold text-xl text-black pb-2">FOODVERSE</li>
                    <li>FOODIE</li>
                    <li>FOBlin</li>
                    <li>District</li>
                    <li>Feeding India</li>
                    <li>Hyperpure</li>
                    <li>FOODIE Live</li>
                    <li>FOODland</li>
                    <li>Weather Union</li>
                </ul>
            </div>
            <div>
            <ul className="text-gray-500 text-lg">
                    <li className="font-bold text-xl text-black pb-2">For Restaurants</li>
                    <li>Partner With Us</li>
                    <li>Apps For You</li>
                </ul>
            </div>
            <div>
            <ul className="text-gray-500 text-lg">
                    <li className="font-bold text-xl text-black pb-2">Learn More</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div>
            <ul className="text-gray-500 text-lg ">
                
                    <li className="font-bold text-xl text-black pb-2">Social links</li>
                    <div className="flex">
                    <li><img className="w-10 mx-2 cursor-pointer" src={facebook} alt="" /></li>
                    <li><img className="w-10 mx-2 cursor-pointer" src={linkedin} alt="" /></li>
                    <li><img className="w-10 mx-2 cursor-pointer" src={twitter} alt="" /></li>
                    <li><img className="w-10 mx-2 cursor-pointer" src={instagram} alt="" /></li>
                    </div>
                </ul>
            </div>
           </div>

           <div className="border-t-2 border-gray-600 pt-7 mt-10">
            <p className="text-gray-500">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
           </div>

        </div>
    )
}

export default Footer;