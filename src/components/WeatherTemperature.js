 import React from 'react';
 import WeatherIcons from 'react-weathericons';
 import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from './../constants/WeatherStates';
 import PropTypes from 'prop-types';

 const icons = {
        [CLOUD] : 'cloud',
        [CLOUDY] : "clody",
        [SUN] : "day-sunny",
        [RAIN] : "rain",
        [SNOW] : "snow",
        [WINDY] : "windy"};

 const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    return <WeatherIcons name = {icon} size="2x"/>;
 };
 const WeatherTemperature = ({temperature, weatherState = "sunny" }) => (
    <div>
            {getWeatherIcon(weatherState)}
            <span>{` ${temperature} C `}</span>
        
    </div>
 );

 WeatherTemperature.protoTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string
 };
 export default WeatherTemperature;