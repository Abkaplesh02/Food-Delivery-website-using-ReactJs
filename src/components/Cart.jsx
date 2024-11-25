import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import RestMenuCard from "./RestMenuCard";
import { clearCart } from "../Redux/cartSlice";

const Cart = () =>{

    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems)

    const dispatch = useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    }


    return (
        <div>
            
            <h1 className="font-bold text-3xl text-gray-500 text-center p-[8vh]">Cart</h1>
           { cartItems.length!==0 && <h1 className="font-bold text-3xl text-gray-500 text-center p-[8vh]"><button className="bg-white text-gray-800  py-4 px-8 border-4 border-gray-800" onClick={handleClear}>Clear Cart</button></h1> } 
            <div className="p-10 shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10">
            {
                cartItems.map((e)=><RestMenuCard data={e.data}/>)
            }
            </div>
        </div>
    )
}
 
export default Cart;