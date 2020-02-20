import React from "react";

const Card = (props) => {

    return (
        <div>
            <p>{props.date}</p>
            <h1>{props.title}</h1>
            <img src={props.imgUrl} alt=''></img>
            <p>{props.explanation}</p>
        </div>
    )

}



export default Card
