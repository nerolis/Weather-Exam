import { FETCH_WEATHER, CITY_DELETED } from '../Actions/types';

export default function weather(state= [], action = {}) {
  switch (action.type) {
    case FETCH_WEATHER:
        return [
        ...state,
        action.data
      ];
    case CITY_DELETED:
      return state.filter(weather => weather.id !== action.weatherId) // Не мутация(?). 
  } 
  return state;
}