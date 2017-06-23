import axios from 'axios';
import {FETCH_WEATHER, CITY_DELETED, SET_WEATHER, CITY_UPDATE} from './types';
  export function weather(data) {
    return {
      type: FETCH_WEATHER,
      data
    }
  }



// export function setUpdate(data) {
//       return {
//         type: CITY_UPDATE,
//         data
//   }
// }


export function removeCity(weatherId) {
localStorage.removeItem('city-')
 return {
    type: CITY_DELETED,
    weatherId
  }
}

export function setWeather(data) {
  return {
    type: CITY_UPDATE,
    data
  }
}
export function updateCity(city, lang) {
  return dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=cf0b555fb4c46b8a845bc93e9af30122`, {mode: 'cors'})  
     .then(response => {
       dispatch(setWeather(response.data))   
  })
  }}
export default function  fetchWeather(city, lang) {
  return dispatch => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=cf0b555fb4c46b8a845bc93e9af30122`, {mode: 'cors'})
      .then(response => { dispatch(weather(response.data))     
    })
  }}
