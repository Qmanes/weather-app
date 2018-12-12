import convert from 'convert-units';
import { CLOUD } from '../constants/WeatherState';

const getWeatherState = weatherData =>{
    return CLOUD;
}
const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(1));
}
const transformWeather = weatherData =>{
    const {humidity,temp} = weatherData.main;
    const {name} = weatherData;
    const weatherState = getWeatherState(weatherData);
    const {speed} = weatherData.wind;
    const temperature = getTemp(temp);
    return {
        city: name,
        data:{
            temperature,
            weatherState: weatherState,
            humidity,
            wind: `${speed} m/s`,
        }
    }
}
export default transformWeather;