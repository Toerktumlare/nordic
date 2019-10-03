import {
  SET_WORKOUTS,
} from '../actions/workoutsActions';

const initialState = {
  wods: [],
};

export default function workouts(state = initialState, action) {
  switch (action.type) {
    case SET_WORKOUTS:
      return { ...state, wods: action.payload };
    default:
      return state;
  }
}
