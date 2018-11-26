import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem  = ({weekDate, hour,data}) =>{
        console.log(data);
        return (
            <div>
                <div>{`${weekDate} hora: ${hour} hs`}</div>
                <WeatherData data = {data} />
            </div>
        );
    
}
ForecastItem.prototype = {
    weekDate : PropTypes.string.isRequired,
    hour : PropTypes.string.isRequired
}
export default ForecastItem;