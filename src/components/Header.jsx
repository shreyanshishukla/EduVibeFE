import { useDispatch, useSelector } from "react-redux";
import { changeMenu } from "../utils/customHooks/reducer/menuReducer";
import useMenuOptions from "../utils/customHooks/useMenuOptions"
import { Link } from "react-router-dom";

export default ()=>{

    const menu=useSelector(data=>data.menu);
    console.log("menus",menu)
    const dispatcher=useDispatch();
     const changeMenuIndex=(index)=>{
       
         dispatcher(changeMenu(index))
        console.log("cuurent ",menu.menuOptions[menu.currentMenu])
    }

    const menuOptions=useMenuOptions();
    return <div className="header flex-row-space-between">
    <div className="appName">Edu-Vibe</div>
    <div className="menu-wrapper flex-row">{
        menuOptions.map((menuOption,index)=>(<div className="menu-option" onClick={()=>changeMenuIndex(index)}><Link to={"/"+menuOption}>{menuOption}</Link></div>))
     }</div>
     
    </div>
}