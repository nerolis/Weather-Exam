import {FETCH_LOCATION} from './types';
import axios from 'axios';
  export function setLocation(data) {
    return {
      type: FETCH_LOCATION,
      data
    }
  }

    // Другой сервис
  // http://api.wunderground.com/api/39097a8d0acc364d/forecast/q/${latitude},${longitude}.json`
export default function fetchLocation(latitude, longitude, lang) {
return dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${lang}&appid=cf0b555fb4c46b8a845bc93e9af30122`, {mode: 'cors'})
     .then(response => { dispatch(setLocation(response.data))
         
   })
}}