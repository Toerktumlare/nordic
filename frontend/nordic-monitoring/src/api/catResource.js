import axios from 'axios';

export default function get() {
  return axios.get(
    'https://api.thecatapi.com/v1/images/search',
    {
      headers: {
        'x-api-key': '878a6010-c671-4c61-853f-cba1154a6aa3',
      },
    },
  );
}
