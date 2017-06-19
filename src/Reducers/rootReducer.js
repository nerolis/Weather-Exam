import { combineReducers } from 'redux';
import weather from './weatherReducer';
import location from './locationReducer';
import convertation from './toggleReducer';
import language from './languageReducer';
const rootReducer = combineReducers({
  weather,
  location,
  convertation,
  language,
});

export default rootReducer;