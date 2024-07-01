export default ({question})=>{
    const renderDifficulty =(level)=>{
        return <div className={level}>{level}</div>
    }
    return <tr className="ques-rows font">
            <td className="quesStatus"><div>{question.status}</div></td>
            <td className="ques-title"><div>{question.title}</div></td>
            <td className="ques-difficulty"><div>{renderDifficulty(question.difficulty)}</div></td>
    </tr>
}