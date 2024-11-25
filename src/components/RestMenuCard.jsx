import FieryPaprika from "../attributes/FieryPaprika.avif"
const RestMenuCard = (data)=>{
    console.log(data);
    // const data= data.page_data.order.menuList.menus
    return (
        <div className="flex justify-between my-10 mx-5">
            <div className="w-3/12 "><button className=" bg-black text-white absolute rounded-lg">Add +</button> <img className="w-[70%] rounded-2xl" src={FieryPaprika} alt="" /></div>
            <div className="w-8/12"><h1 className="text-2xl text-gray-800 py-2">{data.data.name}</h1>
            <p className="py-2 text-lg">💰 {data.data.max_price || data.data.min_price}</p>
            <p className="w-[70%] py-2 text-sm text-gray-500">{data.data.desc}</p>
            </div>
        </div>
    )
}

export default RestMenuCard;

