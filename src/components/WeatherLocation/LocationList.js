import React from 'react';
import WeatherLocation from './';
import PropTypes from 'prop-types';

const strComponetns = cities => (
    cities.map(city =><WeatherLocation key = {city} city = {city}></WeatherLocation> )
);

const LocalList = ({cities}) =>  (
        <div>
            {strComponetns(cities)}
        </div>
    );

LocalList.prototype = {
    cities : PropTypes.array.isRequired
}

export default LocalList;
