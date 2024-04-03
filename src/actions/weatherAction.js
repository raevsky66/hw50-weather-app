import {createAction} from "@reduxjs/toolkit";
import {apiKey, baseUrl} from "../utils/constants";

export const putWeatherAction = createAction('PUT_WEATHER');
export const pendingWeatherAction = createAction('PENDING_WEATHER');
export const errorWeatherAction = createAction('ERROR_WEATHER');


export const getWeather = () => {
    return (dispatch,getState) => {
        const city = getState().weather.city;
        console.log(city)

        dispatch(pendingWeatherAction({
            temp: null,
            city: null,
            pressure: null,
            country: null,
            sunset: null,
            message: "reeeega..."
        }));

        fetch(baseUrl + "?q=" + city + "&appid=" + apiKey + "&units=metric")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.cod ==='404'){
                    console.log(data.cod)
                    dispatch(
                        errorWeatherAction(
                        {
                            temp: null,
                            city: null,
                            pressure: null,
                            country: null,
                            sunset: null,
                            message: data.message
                        }))}
                        else
                            dispatch(putWeatherAction({
                        temp: data.main.temp,
                        city: data.name,
                        pressure: data.main.pressure,
                        country: data.sys.country,
                        sunset: data.sys.sunset,
                        message: null
                    }
                ))
            }).catch(() => {
            dispatch(errorWeatherAction(
                {
                    temp: null,
                    city: null,
                    pressure: null,
                    country: null,
                    sunset: null,
                    message: "problem with weather's server..."
                }
                ));
        })
    }
}