
import CodingQuestionDisplay from "./CodingQuestionDisplay.jsx"
import CodingQuestionWrapper from "./CodingQuestionWrapper.jsx"
import Header from "./Header.jsx"
import AddQuesion from "./Questions/AddQuesion.jsx";
import AddQuestionForm from "./Questions/AddQuestionForm.jsx";
import QuestionTable from "./Questions/QuestionTable.jsx"
import { useState } from "react";

export default ()=>{
const [show, setShow]=useState(false)

    return <div className="QuestionsPage">
        
        <AddQuesion show={show} setShow={setShow}/>
        {show && <AddQuestionForm/>}
        <div className="page-body">
            <QuestionTable show={show} setShow={setShow}/>
        </div>
    </div>
}