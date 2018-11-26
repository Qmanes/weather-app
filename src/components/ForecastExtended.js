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
        this.handleUpdateLocation();
    }

    handleUpdateLocation = () => {
        const url = getWeatherUrlByForecast(this.props.city);
        fetch(url)
            .then((resolve)=>{
                return resolve.json();
            })
            .then((dataJson)=>{
                this.setStateForecastData(dataJson);
            });
         
    }

    setStateForecastData(dataList){
        const {list} = dataList;
        this.setState({
            forecastData : transformForecast(list)
        });
    }

    renderForecastItemDays(){
        const {forecastData} = this.state;
        return  forecastData.map( data => <ForecastItem weekDate = {"lunes"} hour = {10} data = {data.data}/>);
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