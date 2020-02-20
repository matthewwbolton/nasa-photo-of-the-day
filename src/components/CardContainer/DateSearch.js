import React, { useRef } from "react";
import moment from "moment";


const DateSearch = (props) => {

    const dateRef = useRef(null);
    const submitRef = useRef(null);

    function handleDate (props) {
        const dateInput = dateRef.current.value;
        console.log(dateInput)
        props.setDate(dateRef.current.value)

    }

    
    
    
    
    
    
    
    return (
        
        
        <form>
            <label>
                Date:
                <input ref = {dateRef} id = 'myDate' type = 'text' placeholder = "YYYY-MM-DD"></input>
            </label>
            <button onClick = {() => handleDate()} ref={submitRef}>Submit</button>
        </form>
    )

}


export default DateSearch;
