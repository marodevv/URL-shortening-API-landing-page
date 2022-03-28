import axios from 'axios';
const BASE_URL = 'https://api.shrtco.de/v2/shorten?url=';

// Create Axios Instance
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
