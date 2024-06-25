import useMenuOptions from "../utils/customHooks/useMenuOptions"

export default ()=>{
    const menuOptions=useMenuOptions();
    return <div className="header flex-row-space-between">
    <div className="appName">Edu-Vibe</div>
    <div className="menu-wrapper flex-row-space-between">{
        menuOptions.map(menuOption=>(<div className="menu-option">{menuOption}</div>))
     }</div>
     
    </div>
}