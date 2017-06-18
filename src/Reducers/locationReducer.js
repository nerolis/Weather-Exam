import { FETCH_LOCATION } from '../Actions/types';

const INITIAL_STATE = { location: {} };

export default function location(state=[],action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return [ action.data, ...state ];
  }
  return state;
}