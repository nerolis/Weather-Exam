import SWITCH_LANGUAGE from '../Actions/types';

const initialState = {
  english: true
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        english: false
      };
    default:
      return state;
  }
};
