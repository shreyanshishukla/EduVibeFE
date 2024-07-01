import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./customHooks/reducer/menuReducer";
import QuestionReducer from "./customHooks/reducer/QuestionReducer";

export default configureStore({
    reducer:{
        menu:menuReducer,
        question:QuestionReducer
    }
}
)