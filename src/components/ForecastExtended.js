import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './WeatherLocation/styleQuery.css'
import ForecastItem from './ForecastItem/';
import transformForecast from './../services/transformForecast';
import {getWeatherUrlByForecast} from './../services/getWeatherUrlByCity';

class   ForecastExtended extends Component {
    constructor(){
        super();
        this.state = {
            forecastData : null
        }
    }
    componentDidMount(){
        this.handleUpdateLocation(this.props.city);
    }

    componentDidUpdate(nextProps){
        if(nextProps.city !== this.props.city) {
            this.setState({forecastData :null});            
            this.handleUpdateLocation(nextProps.city);
        }
    }
    
    handleUpdateLocation = (city) => {
        const url = getWeatherUrlByForecast(city);
        fetch(url)
            .then((resolve)=>{
                return resolve.json();
            })
            .then((weather_data)=>{
                this.setStateForecastData(weather_data);
            });
         
    }

    setStateForecastData(weather_data){
        const forecastData = transformForecast(weather_data);
        this.setState({
            forecastData
        });
    }

    renderForecastItemDays(){
        const {forecastData} = this.state;
        return  forecastData.map( forecast => <ForecastItem 
                                                weekDate = {forecast.weekDay} 
                                                hour = {forecast.hour} 
                                                data = {forecast.data}
                                                key = {`${forecast.weekDay}${forecast.hour}`}
                                                />);
    }

    renderProgress = () =>{
        return <h3>Cargando pronostico extendido</h3>;
    }
    
    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div >
                <h2 className = "forecast-title">Pronostico extendido {city}</h2>

                { forecastData ? this.renderForecastItemDays() : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.prototypes = {
    city : PropTypes.string.isRequired
}

export default ForecastExtended;