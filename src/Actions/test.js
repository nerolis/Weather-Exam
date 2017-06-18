import axios from 'axios';
import { CITY_DELETED }  from './types';



export default function removeCity(weatherId) {
localStorage.removeItem('city-')
 return {
    type: CITY_DELETED,
    weatherId
  }
}