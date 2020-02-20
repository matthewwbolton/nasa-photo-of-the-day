import React, { useRef } from "react";
import moment from "moment";


const DateSearch = (props) => {

    const dateRef = useRef(null);
    const submitRef = useRef(null);
    

    const handleDate = () => {
       const dateInput = dateRef.current.value;
       console.log(dateInput)
       return dateInput;
        

    }

   

    
    
    
    
    
    
    
    return (
        
        
        <form>
            <label>
                Date:
                <input ref = {dateRef} id = 'myDate' type = 'text' placeholder = "YYYY-MM-DD"></input>
            </label>
            <button onClick = {() => {props.setDate(handleDate())}} ref={submitRef}>Submit</button>
        </form>
    )

}


export default DateSearch;
