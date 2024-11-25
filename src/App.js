import React from "react"
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Cart from "./components/Cart";
import User from "./components/User";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";



const AppLayout = () =>{
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
    )
}

const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[{
            path:"/home",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>,
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/user",
            element:<User/>
        },
        {
            path:"/restaurant/*",
            element:<RestMenu/>
        }
    ],
        errorElement:<Error/>
    },
    
])




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>)