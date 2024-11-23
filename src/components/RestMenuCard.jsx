import FieryPaprika from "../attributes/FieryPaprika.avif"
const RestMenuCard = ()=>{
    return (
        <div className="flex justify-between my-10 mx-5">
            <div className="w-3/12"><img className="w-[70%] rounded-2xl" src={FieryPaprika} alt="" /></div>
            <div className="w-8/12"><h1 className="text-2xl text-gray-800 py-2">Fiery Jalapeno & Paprika</h1>
            <p className="py-2 text-lg">💰 199</p>
            <p className="w-[70%] py-2 text-sm text-gray-500">Spiciest veg pizza with jalapeno & red paprika toppings and a new spicy peri peri sauce.</p>
            </div>
        </div>
    )
}

export default RestMenuCard;