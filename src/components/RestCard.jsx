import { SUBWAY } from "../utils/constants";

const RestCard = (props) =>{
    const {data}=props;
    console.log(data);
    return(
           <div className="w-[450px] mx-5 my-8 hover:border-2 hover:border-gray-100 hover:shadow-2xl p-4 rounded-3xl cursor-pointer">
            <div className="pb-3 items-center">
                <img className="rounded-3xl w-[100%] h-[270px]" src={data.info.image.url} alt="Image Not loaded" />
            </div>
            <div className="flex justify-between text-xl pb-2">
                <p className="text-xl pb-2 font-bold">{data.info.name}</p>
                <p className="border border-b-green-300 px-1.5 bg-green-600 text-white rounded-xl">{data.info.rating.aggregate_rating}⭐</p>
            </div>
            <div className="flex justify-between text-xl pb-2 text-gray-500">
                <p className="w-7/12">{data.info.cuisine.map((e)=>e.name).join(" , ")}</p>
                <p className="w-4/12 text-right">{data.info.cft.text}</p>
            </div>
            <p className="text-right text-lg pb-2">{data.order.deliveryTime}</p>
           </div>
        
    )
}

export default RestCard;