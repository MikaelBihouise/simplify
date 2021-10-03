import { EmptyObject } from '../../redux/types';

const userTypes = {
  GET_USER_START: 'GET_USER_START',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE',
};

export interface getUserState {
  type: string;
  pending: boolean;
  id: EmptyObject;
}

export type getUser = {
  type: 'GET_USERS_START';
  pending: boolean;
  id: string;
};

export interface getUserSuccess {
  type: 'GET_USER_SUCCESS';
  id: string;
}
export type getUserFailure = {
  type: 'GET_USER_SUCCESS';
  pending: boolean;
  id: string;
};

export type GetUserActions = getUser | getUserSuccess | getUserFailure;

export default userTypes;
