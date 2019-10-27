import axios from 'axios';

export default function flush() {
  return axios.post('/admin/cache', {
    command: 'CLEAR_FETCH_AND_PUSH',
  });
}
