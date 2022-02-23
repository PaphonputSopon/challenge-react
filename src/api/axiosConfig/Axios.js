import axios from 'axios';
export const instanceAxios = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  },
});
