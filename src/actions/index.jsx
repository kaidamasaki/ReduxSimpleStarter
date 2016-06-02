const API_KEY = 'b26dc66a5da3fff7912f80d3234a3510';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

export { fetchWeather };
