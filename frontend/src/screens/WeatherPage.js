import React,{useState,useEffect} from 'react'
import {Row,Col} from "react-bootstrap";
import axios from 'axios';

function WeatherPage() {
    const [location,setLocation] =useState('')
    const [weatherData,setWeatherData] =useState()
    

    useEffect(() => {
        
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9e8e23893d9809d88d05092556993bb1`)
        // .then((response) => response.text())
        .then((res) => {
            // setWeatherData(res.data)
            const weather = res.data
            // setWeatherData(weather)
            console.log("Data====>",weather)
             setWeatherData(weather)
             console.log("weather====>",weatherData)

        })
        .catch((err) => {
            console.log("error")
        })
    }, [])
    const weather = weatherData;
     function onSubmit (e){
         e.preventDefault()
         setLocation(e.target.value)
     } 
    return (
        <div>
            <h1>weather info</h1>
            <Row>
            <Col>
            <form>
                <div className="form-group">
                    
                    <input type="text" className="form-control" value={location} onChange={(e) => onSubmit(e)} placeholder="Type location to get weather info"/>
                    <button className="btn btn-success" type="submit"><i className="fas fa-cloud"></i></button>
                    </div>
            </form>
            
            <h1>Weather Details</h1>
            <h2>{location}</h2>
            {weatherData === undefined ? null :
            <div>
               <p> <i className="fas fa-cloud-moon fa-3x"></i></p>
             <h2>City: {weatherData.name}</h2> 
            <h2>Station: {weatherData.base}</h2>
            <h2>Temp: {weatherData.main.temp -274.15} celcius</h2> 
            <h2>humidity: {weatherData.main.humidity}</h2>
            <h2>wind: {weatherData.wind.speed} km/s</h2>
            </div>
              }
            </Col>
            </Row>
        </div>
    )
}

export default WeatherPage
