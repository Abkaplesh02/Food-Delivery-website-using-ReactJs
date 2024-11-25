import About from "./About";

const User = ()=>{
    return (
            <div>
             <div className="p-10 shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-[5vh]  text-center">
             <h1 className="text-3xl my-[5vh]">Set User 😎 </h1>
             <input type="text" className="border-2 border-gray-700 p-3 w-[40vw]" placeholder=" 🔎 Enter userName 😎" />
             </div>
            <About/>
            </div>
    )
}

export default User;