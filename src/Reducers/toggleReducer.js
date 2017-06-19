import { KELVIN_TOGGLE } from '../Actions/types';

const InitialState = {
      isConvert: false, 
    }
export default (state = InitialState, action = {}) => {
  switch(action.type) {
    case KELVIN_TOGGLE:
      return {
      isConvert: true,
    };
    default: return state;
  }
}
