export const SET_PARTICIPANTS = 'SET_PARTICIPANTS';

export function setParticipants(data) {
  return {
    type: SET_PARTICIPANTS,
    payload: data,
  };
}
