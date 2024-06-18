import SearchBox from "./SearchBox";
import InformationBox from "./InformationBox";
import React, { useState, useEffect } from "react";

export default function WeatherApp(){
    
    const [ weatherInfo, setWeatherInfo] = useState({
        city: "Sukkur",
        description: "haze",
        feelsLike: 47.93,
        humidity: 40,
        pressure: 997,
        temp: 43.13,
   
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
    <div style={{textAlign:"center"}}>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InformationBox info={weatherInfo}/>
    </div>
    )
}