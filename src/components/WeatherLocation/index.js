import React , {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from '../../services/transformWeather'
import getWeatherUrlByCity from '../../services/getWeatherUrlByCity';
import PropTypes from 'prop-types';


class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const {city} = props
        this.state={
            city,
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
        const url = getWeatherUrlByCity(this.state.city);
        fetch(url)
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

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired
};

export default WeatherLocation;