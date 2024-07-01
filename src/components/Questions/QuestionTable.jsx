import { useSelector } from "react-redux";
import useGetQuestions from "../../utils/customHooks/useGetQuestions"
import AddQuesion from "./AddQuesion.jsx";
import QuestionRow from "./QuestionRow.jsx";


export default ({show , setShow})=>{
    const question= useSelector(data=>data.question)
  



    return <>
   
    <table className="QuestionTable">
    <tr className="ques-header font">
        <th className="ques-status">Status</th>
        <th className="ques-title">Title</th>
        <th className="ques-difficulty">Difficulty</th>
    </tr>
    {
        question.map((q,i)=><QuestionRow question={q}/>)
    }
</table>
</>
}