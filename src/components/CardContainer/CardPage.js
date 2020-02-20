import React, { useState, useEffect } from 'react';
import DateSearch from '../CardContainer/DateSearch'

import Card from './Card';
import axios from 'axios';


const CardPage = () => {


    
    const [nasaData, setNasaData] = useState([]);
    const [date, setDate] = useState('2020-02-19');

    
    
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

        <div>
            <DateSearch date={date} setDate={setDate}/>
            <Card title = {nasaData.title} date={nasaData.date} imgUrl = {nasaData.url} explanation={nasaData.explanation} />
        </div>
    
)

}

export default CardPage;
