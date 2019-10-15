import {
  SET_ATTENDEES,
} from '../actions/attendeeActions';

const initialState = {
  data: [],
};

export default function attendeesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ATTENDEES:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
