import React , {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from '../../services/transformWeather'
import {api_weather} from '../../constants/api_url';



class WeatherLocation extends Component {
    constructor(){
        super();
        this.state={
            city : null,
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount = () => {
        console.log("componentDidMount");
        this.handleUpdateLocation();
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDidUpdate");
      
    }
 
    handleUpdateLocation = () => {
        fetch(api_weather)
            .then((resolve)=>{
                return resolve.json();
            })
            .then((dataJson)=>{
                let {city,data} = transformWeather(dataJson);
                this.setState({
                    city,
                    data,
                });
            });
         
    }

    render() {
        console.log("render");

        const {city,data} = this.state;
        return(
            <div className = "weatherLocationCont">
                <Location city = {city}/>
                {data ? <WeatherData data = {data}/> : <CircularProgress/>}
            </div>
        );
    }
};

export default WeatherLocation;