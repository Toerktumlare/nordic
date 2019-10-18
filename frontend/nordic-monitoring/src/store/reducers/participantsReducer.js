import {
  SET_PARTICIPANTS,
} from '../actions/participantsActions';

const initialState = {
  data: [],
};

export default function participantsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
