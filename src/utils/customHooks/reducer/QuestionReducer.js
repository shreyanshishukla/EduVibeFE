import { createSlice } from "@reduxjs/toolkit";
import useGetQuestions from "../useGetQuestions";

const questionReducer=createSlice({
    name:"question",
    initialState:useGetQuestions(),
    reducers:{
        addQuestion:(state,action)=>{
            
             return [...state,action.payload]
             
        }


    }}
)

export default questionReducer.reducer;
export const {addQuestion}=questionReducer.actions