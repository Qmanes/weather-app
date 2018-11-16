 import React from 'react';
 import WeatherIcons from 'react-weathericons';

 const icons =  {
     sunny : "day-sunny",
     fog : "day-fog"
 };
 const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    return <WeatherIcons name = {icon} size="1x"/>;
 };
 const WeatherTemperature = ({temperature, weatherState = "sunny" }) => (
    <div>
            {getWeatherIcon(weatherState)}
            <span>{` ${temperature} C `}</span>
        
    </div>
 );
 export default WeatherTemperature;