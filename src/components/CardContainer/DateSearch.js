import React, { useState } from "react";


const DateSearch = (props) => {

    const [date1, setDate1] = useState();

    function handleDate(e){
        setDate1(e.target.value);
        console.log(date1);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.setDate(date1);
        console.log(props.date);
    }

    
    
    
    
    
    
    
    return (
        
        
        <form>
            <label>
                Date:
                <input onChange =  {(e) => {handleDate(e)}} id = 'myDate' type = 'text' placeholder = "YYYY-MM-DD"></input>
            </label>
            <button onClick = {(e) => {handleSubmit(e)}}>Submit</button>
        </form>

    )

}


export default DateSearch;
