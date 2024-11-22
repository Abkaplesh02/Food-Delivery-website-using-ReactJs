import React from "react"
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";

const AppLayout = () =>{
    return (
        <Provider store={appStore}>
        <div>Hello namste food</div>
        </Provider>
    )
}




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)