import { FETCH_WEATHER, CITY_DELETED, CITY_UPDATE, SET_WEATHER} from '../Actions/types';

export default function weatherCity(state= [], action = {}) {
  switch (action.type) {
    case FETCH_WEATHER:
        return [
        ...state,
        action.data
      ];
        case CITY_UPDATE:
       const updatedCity = state.map(weather => {
        if(weather !== action.data){
          return { ...weather, ...action.data }
        }
        return weather
      })
      return updatedCity

    case CITY_DELETED:
      return state.filter(weather => weather.id !== action.weatherId)
        
  } 
  return state
}
