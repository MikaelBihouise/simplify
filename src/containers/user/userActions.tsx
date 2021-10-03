import userTypes from './userTypes';
import { ResponseGenerator } from '../../redux/types';

export interface getUserFailureType {
  error: string;
}

export const getUserStart = () => ({
  type: userTypes.GET_USER_START,
});

export const getUserSuccess = (payload: ResponseGenerator) => ({
  type: userTypes.GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = (payload: getUserFailureType) => ({
  type: userTypes.GET_USER_FAILURE,
  payload,
});
