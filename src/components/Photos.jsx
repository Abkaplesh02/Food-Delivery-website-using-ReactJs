import { BRAKING, BURGER, BURGER_KING, DRDIET, ICE_Cream, JNJ, PIZZA, ROLLEXPRESS, Rolls, SUBWAY, THALI, VEG_MEAL } from "../utils/constants";
const Photos = ()=>{
    return (
        <div className="shadow-2xl border-2 border-gray-200 w-10/12 pt-5 mt-10 m-auto p-4 mb-10 flex justify-between">
                <div className="w-[100%] flex" > 
                    <img className="w-2/12 border-3 rounded-full px-1 " src={BRAKING} alt="" />
                    <img className="w-2/12 border-3 rounded-full px-1 " src={BURGER} alt="" />
                    <img className="w-2/12 border-3 rounded-full px-1 " src={BURGER_KING} alt="" />
                    <img className="w-2/12 border-3 rounded-full px-1 " src={DRDIET} alt="" />
                    <img className="w-2/12 border-3 rounded-full px-1 " src={ICE_Cream} alt="" />
                    <img className="w-2/12 border-3 rounded-full px-1 " src={PIZZA} alt="" />
                </div>
                </div>
            
    )
}

export default Photos;