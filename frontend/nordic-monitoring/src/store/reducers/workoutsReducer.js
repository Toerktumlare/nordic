import {
  SET_WORKOUTS, IS_FLUSHING,
} from '../actions/workoutsActions';

const initialState = {
  wods: undefined,
  isFlushing: false,
};

export default function workoutsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORKOUTS:
      return { ...state, wods: action.payload };
    case IS_FLUSHING:
      return { ...state, isFlushing: action.payload };
    default:
      return state;
  }
}
