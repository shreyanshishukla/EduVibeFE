import { Outlet } from "react-router-dom";
import Coding from "./Coding.jsx";
import Header from "./Header.jsx";

export default ()=>{
    return <div>
   <div className="page-header">
       <Header/>
        </div>
        <Outlet/>
    </div>;
}