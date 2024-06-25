import CodingQuestion from "./CodingQuestion.jsx"
import CodingQuestionDisplay from "./CodingQuestionDisplay.jsx"
import CodingQuestionWrapper from "./CodingQuestionWrapper.jsx"
import Header from "./Header.jsx"

export default ()=>{
    return <div className="QuestionsPage">
        
        <div className="page-header">
       <Header/>
        </div>
        <div className="page-body">
        <CodingQuestionWrapper/>
        <CodingQuestionDisplay/>


        </div>
    </div>
}