import userTypes, { getUserState } from '../containers/user/userTypes';
import { EmptyObject } from '../redux/types';

const initialState: getUserState = {
  type: 'GET_USER_START',
  pending: false,
  id: {},
};

export type getUsers = {
  type: string;
  pending: boolean;
  id: EmptyObject;
};

type Action = { type: string; id: getUsers };

const getUserReducer = (state: getUserState = initialState, action: Action) => {
  switch (action.type) {
    case userTypes.GET_USER_START: {
      return {
        ...state,
        pending: true,
      };
    }
    case userTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        pending: false,
        id: action.id,
      };
    }
    case userTypes.GET_USER_FAILURE: {
      return {
        ...state,
        pending: false,
        error: action.id,
      };
    }
    default:
      return state;
  }
};

export default getUserReducer;
