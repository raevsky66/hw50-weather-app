import React from 'react';
import {useDispatch} from "react-redux";
import {getWeather} from "../actions/weatherAction";
import {inputCityAction} from "../actions/cityAction";

const Form = () => {
    const dispatch = useDispatch();
        const handleGetCitySubmit = (e) => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        dispatch(inputCityAction(city));
        dispatch(getWeather())
    }
    return (
        <form onSubmit={handleGetCitySubmit}>
            <input type="text" name={'city'} placeholder={'Enter city'}/>
            <button>Get weather</button>
        </form>
    );
};

export default Form;