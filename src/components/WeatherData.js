import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = (props) => (
    <div>
        <WeatherTemperature 
            temperature = {20} 
            weatherState = {'sunny'}
        />
        <WeatherExtraInfo humidity={80} wind={'10 m/s'}/>
    </div>
);

export default WeatherData;