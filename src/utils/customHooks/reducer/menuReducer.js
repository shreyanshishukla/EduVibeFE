import useMenuOptions from "../useMenuOptions";

const { createSlice } = require("@reduxjs/toolkit");

const menuData=createSlice({
    name:"menuReducer",
    initialState:{
        menuOptions:useMenuOptions(),
        currentMenu:0
    },
    reducers:{
        changeMenu:(state,action)=>{
            state.currentMenu=action.payload
        }
    }

})

export const {changeMenu}=menuData.actions
export default menuData.reducer
