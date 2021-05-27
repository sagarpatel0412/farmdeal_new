import React,{useState,useEffect} from 'react'
import {Row,Col} from "react-bootstrap";
import axios from 'axios';
import markets from '../markets';
import cloud from '../cloud.svg';
import '../App.css';
import night from '../night.svg';
import nighttime from '../nighttime.jpg'
import daytime from '../daytime.jpg'

function WeatherPage() {
    const [location,setLocation] =useState('')
    const [weatherData,setWeatherData] =useState()
    const [error , setError] = useState('')
    console.log("markets==>",markets)
    

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
             console.log("error",err)
             setError("No such city found or type the city name.....")

         })
         
     } 
     const hours = new Date().getHours()
    return (
        <div>
            <h1>weather info</h1>
            <Row>
            <Col>
            <div className="container">
           
            <form > 
                <div className="form-group" style={{display:"flex"}}>
                    
                    <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} style={{width:"50%"}}  placeholder="Type location or city to get weather info"/>
                    <button className="btn btn-primary" type="submit" onClick={ onSubmitOne} style={{marginLeft:"10px",borderRadius:"12px",border:"none"}}><i className="fas fa-search"></i></button>
                    </div>
            </form>
             
            
            <h1>Weather Details</h1>
            <ul>
                <li>All data are according to openweathermap.org <a href="https://openweathermap.org/">click here to check</a></li>
                <li>All temperature data were in kelvin. We converted it into celcius</li>
                <li>Our webpage display current weather and temperature of today not weekly. for more info visit openweathermap</li>
                <li>Day time and Night Time return current location from where you are checking the city</li>
            </ul>
            <h2>City you searched for:{location && location}</h2>
            
            {/* {weatherData === undefined ? error : 
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
            <h2>wind: {weatherData.wind.speed && weatherData.wind.speed} km/h</h2>
            <h2>Feels like:{weatherData.main.feels_like && weatherData.main.feels_like - 274.15}&#176; celcius</h2>
            <h2>Max Temp:{weatherData.main.temp_max && weatherData.main.temp_max - 274.15}&#176; celcius</h2>
            <h2>Min temp:{weatherData.main.temp_min && weatherData.main.temp_min - 274.15}&#176; celcius</h2>
            </div>
              } */}
             
              <div>
                 {   weatherData === undefined ? error :
                <div className="container1" style={ hours < 18 ? {backgroundImage:`url(${daytime})`,backgroundRepeat:"no-repeat",backgroundSize:"1100px 300px"} : {backgroundImage:`url(${nighttime})`,backgroundRepeat:"no-repeat",backgroundSize:"1100px 300px"} }>
                            
                            <div className="widget">
                                <center>
                            <div style={{display:"flex"}}>
                                <div className="left">
                                    <img src={hours < 18 ? cloud : night} className="icon" style={{display:"flex"}} />
                                    <h5 className="weather-status"> {weatherData.weather && weatherData.weather.map((item)=>{
                                        return(
                                            <div>
                                                <h5 style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>{item.description && item.description}</h5>
                                                <h5 style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>{item.main && item.main}</h5>
                                            </div>
                                        )
                                    })}</h5>
                                     {/* <h5 >{weatherData.name && weatherData.name}</h5>
                                    <h5>{weatherData.main.temp && weatherData.main.temp -274.15.toFixed(2)}&#176;c</h5> */}
                                </div>
                                <center>
                                <div style={{marginTop:"80px"}}>
                                    
                                    {hours < 18 ? <h6 style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>Day Time</h6> : <h6 style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>Night Time</h6> }
                                    <h5 className="city" style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>City:{weatherData.name && weatherData.name}</h5>
                                    <h5 className="degree" style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>Temp:{weatherData.main.temp && weatherData.main.temp -274.15}&#176;c</h5>
                                </div>
                                </center>
                                </div>
                                </center>
                                <div className="bottom">
                                    <div style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>
                                        Wind Speed <span style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>{weatherData.wind.speed && weatherData.wind.speed} kmph</span>
                                    </div>
                                    <div style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>
                                        Humidity <span style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>{weatherData.main.humidity && weatherData.main.humidity}</span>
                                    </div>
                                    <div style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>
                                        Feels Like <span style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>{weatherData.main.feels_like && weatherData.main.feels_like - 274.15}&#176;c</span>
                                    </div>
                                    <div style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>
                                        Max Temp <span style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>{weatherData.main.temp_max && weatherData.main.temp_max - 274.15}&#176;c</span>
                                    </div>
                                    <div style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>
                                        Min Temp <span style={hours < 18 ? {color:"#000"}:{color:"#fff"}}>{weatherData.main.temp_min && weatherData.main.temp_min - 274.15}&#176;c</span>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    }
              </div>
              </div>
            </Col>
            </Row>
        </div>
    )
}

export default WeatherPage
