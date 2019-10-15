export const SET_WORKOUTS = 'SET_WORKOUTS';

export function setWorkouts(data) {
  return {
    type: SET_WORKOUTS,
    payload: data,
  };
}
