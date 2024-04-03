import {createReducer} from "@reduxjs/toolkit";
import {inputCityAction} from "../actions/cityAction";
import {errorWeatherAction, pendingWeatherAction, putWeatherAction} from "../actions/weatherAction";

const initialState = {
    city: "", weatherInfo: {
        temp: "no temp",
        city: "no city",
        pressure: "no pressure",
        country: "no country",
        sunset: "no sunset",
        message: "Enter city name"
    }
}

const accountReducer = createReducer(initialState,
    builder => {
        builder
            .addCase(inputCityAction, (state, action) => {
                  state.city = action.payload;
            })
            .addCase(putWeatherAction, (state, action) => {
                state.weatherInfo = action.payload;
            })
         .addCase(pendingWeatherAction, (state, action) =>
         {
             state.weatherInfo = action.payload;
         })
         .addCase(errorWeatherAction, (state, action) =>
         {
             state.weatherInfo = action.payload;
         })
    })

export default accountReducer
