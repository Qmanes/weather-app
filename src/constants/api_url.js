const location = "Caracas,ve";
const api_key = "de0495fc1619215c0e05a69976e5b8a4";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
