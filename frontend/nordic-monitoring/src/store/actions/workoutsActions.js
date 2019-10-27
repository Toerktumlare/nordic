import flush from '../../api/adminResource';

export const SET_WORKOUTS = 'SET_WORKOUTS';
export const IS_FLUSHING = 'IS_FLUSHING';

export function setWorkouts(data) {
  return {
    type: SET_WORKOUTS,
    payload: data,
  };
}
export function isFlushing(data) {
  return {
    type: IS_FLUSHING,
    payload: data,
  };
}

export function doFlush() {
  return (dispatch) => {
    dispatch(isFlushing(true));

    flush()
      .then(() => {
        dispatch(isFlushing(false));
      }).catch(() => {
        // TODO: fix error handling
      });
  };
}
