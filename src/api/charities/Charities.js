import { instanceAxios } from '../axiosConfig/axios';
export const setCharities = async (payload) => {
  try {
    const { data } = await instanceAxios.post('charities', payload);
    return data;
  } catch (error) {
    console.log('setCharities error ------------->>', error);
    return { message: `${error}`, status: 400 };
  }
};

export const getCharities = async () => {
  try {
    const { data } = await instanceAxios.get('charities');
    return data;
  } catch (error) {
    console.log('getCharities error ------------->>', error);
    return { message: `${error}`, status: 400 };
  }
};
