import {url_base_weather, api_key} from '../constants/api_url';

export const getWeatherUrlByCity = city => {
    return `${url_base_weather}weather?q=${city}&appid=${api_key}`;

}
export const getWeatherUrlByForecast = city => {
    return `${url_base_weather}forecast?q=${city}&appid=${api_key}`;

}