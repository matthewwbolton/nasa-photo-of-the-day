import React, { useRef } from "react";
import moment from "moment";


const DateSearch = (props) => {

    const dateRef = useRef(null);
    const submitRef = useRef(null);
    

    const handleDate = (e) => {
        // e.preventDefault();
       let dateInput = dateRef.current.value;
       console.log(dateInput)
       return dateInput;
    }

   

    
    
    
    
    
    
    
    return (
        
        
        <form>
            <label>
                Date:
                <input onChange =  {() => {props.setDate(handleDate)}} ref = {dateRef} id = 'myDate' type = 'text' placeholder = "YYYY-MM-DD"></input>
            </label>
            <button ref={submitRef}>Submit</button>
        </form>

    )

}


export default DateSearch;
