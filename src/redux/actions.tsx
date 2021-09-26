import types from './types';

export function fetchData(data: string) {
  return {
    type: types.SEND_REQUEST,
    payload: data,
  };
}

export const fetchDataSucess = (user: string) => ({
  type: types.SEND_REQUEST_SUCCESS,
  payload: user,
});

export const fetchDataFailure = (error: string) => ({
  type: types.SEND_REQUEST_FAILURE,
  payload: '',
  error: '',
});
