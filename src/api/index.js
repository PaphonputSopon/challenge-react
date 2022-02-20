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

export async function setCharities(payload) {
  try {
    const { data } = await instanceAxios.post('charities', payload);
    return data;
  } catch (error) {
    console.log('setCharities error ------------->>', error);
    return { message: `${error}`, status: 400 };
  }
}

export async function getCharities() {
  try {
    const { data } = await instanceAxios.get('charities');
    return data;
  } catch (error) {
    console.log('getCharities error ------------->>', error);
    return { message: `${error}`, status: 400 };
  }
}
