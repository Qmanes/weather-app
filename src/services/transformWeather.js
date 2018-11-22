import convert from 'convert-units';
import { CLOUD,SUN,RAIN,SNOW,THUNDER,DRIZZLE } from '../constants/WeatherState';

const getWeatherState = weatherData =>{
    const {id} = weatherData;
    if(id < 300)
        return THUNDER;
    else if (id < 400)
        return DRIZZLE;
    else if (id < 600)
        return RAIN;
    else if (id < 700)
        return SNOW;
    else if (id === 800)
        return SUN;
    else 
        return CLOUD;
}
const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(1));
}
const transformWeather = weatherData =>{
    const {humidity,temp} = weatherData.main;
    const {name} = weatherData;
    const weatherState = getWeatherState(weatherData.weather[0]);
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