import * as _ from 'lodash';
import { instanceAxios } from '../axiosConfig/axios';

export const setPayments = async (payload) => {
  try {
    if (_.isEmpty(payload)) return;
    const res = await instanceAxios.post('payments', payload);
    console.log('res ------------->>', res);
  } catch (error) {
    console.log('setPayments error ------------->>', error);
    return { message: `${error}`, status: 400 };
  }
};
