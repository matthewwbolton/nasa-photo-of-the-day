import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import styled from 'styled-components';

const NewTitle = styled(CardTitle)`
    font-size: 8rem;
    color: coral;
    font-family: 'Titillium Web', sans-serif;
`;

const NewCardText = styled(CardText)`
    font-size: 2rem;
    color: silver;
    font-family: 'Titillium Web', sans-serif;
`;

const PhotoCard = (props) => {

    return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={props.imgUrl} alt=""/>
        <CardImgOverlay>
          <NewTitle>{props.title}</NewTitle>
          <NewCardText>{props.explanation}</NewCardText>
          <CardText>
            <small className="text-muted">{props.date}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
    )

}



export default PhotoCard
