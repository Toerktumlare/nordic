export const SET_ATTENDEES = 'SET_ATTENDEES';

export function setAttendees(data) {
  return {
    type: SET_ATTENDEES,
    payload: data,
  };
}
