import React,{useState,useEffect} from 'react'
import {Row,Col} from "react-bootstrap";
import axios from 'axios';

function WeatherPage() {
    const [location,setLocation] =useState('')
    const [weatherData,setWeatherData] =useState()
    

    useEffect(() => {
      
        // axios
        // .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9e8e23893d9809d88d05092556993bb1`)
        // // .then((response) => response.text())
        // .then((res) => {
        //     // setWeatherData(res.data)
        //     const weather = res.data
        //     // setWeatherData(weather)
        //     console.log("Data====>",weather)
        //      setWeatherData(weather)
        //      console.log("weather====>",weatherData)

        // })
        // .catch((err) => {
        //     console.log("error")
        // })
        onSubmitOne()
    }, [])
    // const weather = weatherData;
     function onSubmitOne (){
        // preventDefault()
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
         
     } 
    return (
        <div>
            <h1>weather info</h1>
            <Row>
            <Col>
            <form > 
                <div className="form-group" style={{display:"flex"}}>
                    
                    <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} style={{width:"50%"}}  placeholder="Type location to get weather info"/>
                    <button className="btn btn-primary" type="submit" onClick={ onSubmitOne} style={{marginLeft:"10px",borderRadius:"12px",border:"none"}}><i className="fas fa-search"></i></button>
                    </div>
            </form>
            
            <h1>Weather Details</h1>
            <h2>City you searched for:{location && location}</h2>
            {weatherData === undefined ? null :
            <div style={{backgroundColor:"#1F618D", padding:"20px"}}>
               <p> <i className="fas fa-cloud-moon fa-3x" style={{color:"white"}}></i></p>
             <h2>City: {weatherData.name && weatherData.name}</h2>
            <h2>Weather: {weatherData.weather && weatherData.weather.map((item)=>{
                return(
                    <div>
                        <h2>Description : {item.description && item.description}</h2>
                        <h2>Weather Now :{item.main && item.main}</h2>
                    </div>
                )
            })}</h2>
            <h2>Station: {weatherData.base && weatherData.base}</h2>
            <h2>Temp: {weatherData.main.temp && weatherData.main.temp -274.15}&#176; celcius</h2> 
            <h2>humidity: {weatherData.main.humidity && weatherData.main.humidity}</h2>
            <h2>wind: {weatherData.wind.speed && weatherData.wind.speed} km/s</h2>
            <h2>Feels like:{weatherData.main.feels_like && weatherData.main.feels_like - 274.15}&#176; celcius</h2>
            <h2>Max Temp:{weatherData.main.temp_max && weatherData.main.temp_max - 274.15}&#176; celcius</h2>
            <h2>Min temp:{weatherData.main.temp_min && weatherData.main.temp_min - 274.15}&#176; celcius</h2>
            </div>
              }
            </Col>
            </Row>
        </div>
    )
}

export default WeatherPage
