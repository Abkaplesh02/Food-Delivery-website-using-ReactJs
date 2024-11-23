import contact from "../attributes/contact.png"; 
import mockGitData from "../utils/mockGitData";



const About = () =>{

    const Git_Data=mockGitData;


    return (

        <div className="p-10 shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4  ">


           <div className="flex mb-[10vh]">
           <img src={contact} alt="" />
           <h1 className="text-3xl text-center">{Git_Data.name}</h1>
           </div>

           <div className="flex justify-between mx-10 mb-[20vh] border-b-2 border-gray-500 pb-[10vh]">


           <div className="text-3xl font-bold text-gray-600 mt-[15vh]">
           <h1 className=" text-center">Username :: {Git_Data.login}</h1>
            <h1 className=" text-center">{Git_Data.bio}</h1>
            <h1 className=" text-center">Public repos :: {Git_Data.public_repos}</h1>
           </div>
            <div>
            <img src={Git_Data.avatar_url} alt="" className="rounded-full"/>
            </div>
            </div>
        </div>
    )
}

export default About;