import React, { useState, useEffect } from 'react';
import DateSearch from '../CardContainer/DateSearch'
import PhotoCard from './PhotoCard';
import NavBar from './NavBar';
import styled from 'styled-components';
import axios from 'axios';

const WrapperDiv = styled.div`
    margin: 0 8%;
`;


const CardPage = () => {

    let today = new window.Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;
    console.log(today)


    
    const [nasaData, setNasaData] = useState([]);
    const [date, setDate] = useState(`${today}`);

    
    
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=JK41XOV8b4mxevxeDsw9sq65SmwfRcJPAXjBDQ1Y&date=${date}`)
            .then(res => {
                console.log(res.data)
                setNasaData(res.data)
                setDate(res.data.date)
                
            })
            .catch(err => {
                console.log(err)
            })
    }, [date])
    
    return (

        <WrapperDiv>
            <NavBar />
            <DateSearch date={date} setDate={setDate}/>
            <PhotoCard title = {nasaData.title} date={nasaData.date} imgUrl = {nasaData.url} explanation={nasaData.explanation} />
        </WrapperDiv>
    
)

}

export default CardPage;
