import axios from 'axios';
import {FETCH_WEATHER, CITY_DELETED, KELVIN_TOGGLE} from './types';

  export function setWeather(data) {
    return {
      type: FETCH_WEATHER,
      data
    }
  }

export default function  fetchWeather(city, lang) {
  return dispatch => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=cf0b555fb4c46b8a845bc93e9af30122`, {mode: 'cors'})
      .then(response => { dispatch(setWeather(response.data))     
    })
  }}
