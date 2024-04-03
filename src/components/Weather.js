import React from 'react';
import {useSelector} from "react-redux";

const Weather = () => {
    const {weatherInfo} = useSelector(state => state.weather);

    if(!weatherInfo.message)
    return (
        <div>
            <p>Location: {weatherInfo.city} , {weatherInfo.country}</p>
            <p>Temperature: {weatherInfo.temp}</p>
            <p>Pressure:{weatherInfo.pressure}</p>
            <p>Sunset:{weatherInfo.sunset}</p>
            <p>{weatherInfo.message}</p>
        </div>
    )
    else
        return (
            <div>
                <p>{weatherInfo.message}</p>
            </div>
        )
};

export default Weather;