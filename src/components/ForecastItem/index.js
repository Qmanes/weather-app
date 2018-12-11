import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem  = ({weekDate, hour,data}) =>{
        
        return (
            <div>
                <h2>{`${weekDate} hora: ${hour} hs`}</h2>
                <WeatherData data = {data.data} />
            </div>
        );
    
}
ForecastItem.prototype = {
    weekDate : PropTypes.string.isRequired,
    hour : PropTypes.string.isRequired
}
export default ForecastItem;