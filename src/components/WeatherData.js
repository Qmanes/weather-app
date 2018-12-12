import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from './../constants/WeatherStates';
const WeatherData = (props) => (
    <div>
        <WeatherTemperature 
            temperature = {"0as"} 
            weatherState = {CLOUD}
        />
        <WeatherExtraInfo humidity={70} wind={'10 m/s'}/>
    </div>
);

export default WeatherData;