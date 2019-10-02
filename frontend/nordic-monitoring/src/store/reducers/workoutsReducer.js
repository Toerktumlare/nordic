import {
    SET_WORKOUTS
} from '../actions/workoutsActions'

const initialState = {
    wods: []
};

export function workouts(state = initialState, action) {
    switch (action.type) {
        case SET_WORKOUTS:
            return Object.assign({}, state, {
                wods: action.payload
              })
        default:
            return state;
    }
}