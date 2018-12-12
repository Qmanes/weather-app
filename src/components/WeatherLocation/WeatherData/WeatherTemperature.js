 import React from 'react';
 import WeatherIcons from 'react-weathericons';
 import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,FOG} from '../../../constants/WeatherState';
 import PropTypes from 'prop-types';
 import "./style.css";

 const icons =  {
      [CLOUD] : "cloud",
      [CLOUDY] : "cloundy",
      [SUN] : "day-sunny",
      [RAIN] : "rain",
      [SNOW] : "snow",
      [WINDY] : "windy",
      [FOG] : "day-fog"
 };
 
 const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    return <WeatherIcons className = "wicon"  name = {icon} size={sizeIcon} />;
 };

 const WeatherTemperature = ({temperature, weatherState = "sunny" }) => (
    <div className = "weatherTemperatureCont">
            {getWeatherIcon(weatherState)}
            <span className = "temperature"> {` ${temperature}`} </span>
            <span className = "temperatureType"> {`C`} </span>
        
    </div>
 );

 WeatherTemperature.propTypes = {
   temperature : PropTypes.number.isRequired,
   weatherState : PropTypes.string.isRequired
 };

 export default WeatherTemperature;