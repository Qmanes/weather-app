
import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = weatherDataList => (
    weatherDataList.list.filter(weatherData =>(
        moment.unix(weatherData.dt).utc().hour() === 6 ||
        moment.unix(weatherData.dt).utc().hour() === 12 ||
        moment.unix(weatherData.dt).utc().hour() === 18
    )).map(weatherData =>(
        {
            weekDay: moment.unix(weatherData.dt).format('ddd'),
            hour: moment.unix(weatherData.dt).hour(),
            data: transformWeather(weatherData)
        })
    )
        
) 

export default transformForecast;