import React from 'react';
import WeatherLocation from './';
import PropTypes from 'prop-types';
import './styleQuery.css';
const LocalList = ({cities,onSelectedLocation}) =>  {
    const handleWeatherLocationCLick = city => {
        console.log("handleWeatherLocationCLick");
        onSelectedLocation(city);
    }
    const strComponetns = cities => (
        cities.map(city =>
            <WeatherLocation 
                key = {city} 
                city = {city}
                onWeatherLocationCLick = {()=>{
                    handleWeatherLocationCLick(city)
                }}
            >
            </WeatherLocation> 
        )
    );
    return(
    <div className = "locationList">
        {strComponetns(cities)}
    </div>)

};

LocalList.prototype = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func
}

export default LocalList;
