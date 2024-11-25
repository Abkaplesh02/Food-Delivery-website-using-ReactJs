import { useDispatch } from "react-redux";
import FieryPaprika from "../attributes/FieryPaprika.avif"
import { addToCart } from "../Redux/cartSlice";
const RestMenuCard = (data)=>{

    console.log(data);

    const dispatch=useDispatch();

    const handleClickAdd=()=>{
        dispatch(addToCart(data));   
    }
    
    return (
        <div className="flex justify-between my-10 mx-5 p-2 border-2 border-gray-200 hover:shadow-2xl">
            <div className="w-3/12 "><button onClick={handleClickAdd} className=" bg-black text-white absolute rounded-lg">Add +</button> <img className="w-[90%] rounded-2xl" src={data.data.item_image_url || FieryPaprika} alt={FieryPaprika} /></div>
            <div className="w-8/12"><h1 className="text-2xl text-gray-800 py-2">{data.data.name}</h1>
            <p className="py-2 text-lg">💰 {data.data.max_price || data.data.min_price }</p>
            <p className="w-[70%] py-2 text-sm text-gray-500">{data.data.desc}</p>
            </div>
        </div>
    )
}

export default RestMenuCard;

