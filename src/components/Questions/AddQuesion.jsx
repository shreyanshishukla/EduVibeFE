import { useDispatch, useSelector } from "react-redux"
import { addQuestion } from "../../utils/customHooks/reducer/QuestionReducer"
import { useState } from "react"

export default ({show,setShow})=>{
    const ques=useSelector(data=>data.question)
    const dispatch = useDispatch()
    const addNewQuestion=(data)=>{
         dispatch(addQuestion(data))
         setShow(!show)
    }
    return <button className="add-btn" onClick={()=>addNewQuestion({
        status:0,
        title:"question newly added",
        link:"",
        difficulty:"easy",
        siteName:"",
        category:[],
        user:""
        
    })}>+</button>
}