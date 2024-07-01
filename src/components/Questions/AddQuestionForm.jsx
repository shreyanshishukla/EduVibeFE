export default ()=>{
    return <div className="bgblur"> <div className="pop-out">
    <div>
    <label>Title</label>
    <input type="text" />
    </div>

    <div>
    <label>Link</label>
    <input type="url" />
    </div>

    <div>
    <label>Difficulty</label>
    <select className="select" >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
    </select>
    </div>


    <input type="submit" id="submit-ques-btn" value="add Question"/>


</div></div>
}