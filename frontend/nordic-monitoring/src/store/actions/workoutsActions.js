import { get } from '../../services/workoutsService';

export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export const SET_WORKOUTS = 'SET_WORKOUTS';

export function setWorkouts(data) {
    return {
        type: SET_WORKOUTS,
        payload: data,
    }
}

export function getWorkouts() {
    return dispatch => {
        return get()
            .then((json => {
                    dispatch(setWorkouts(json.data));
            })).catch(error => {
                console.error(error);
            });
    }
}


