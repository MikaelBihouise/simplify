import { getUserSuccess } from '../redux/actions';

const initialState: getUserSuccess = {
  type: 'GET_USER_SUCCESS',
  id: '',
};

type Action = { type: 'GET_USER_SUCCESS'; payload: getUserSuccess };

const getUserReducer = (
  state: getUserSuccess = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS': {
      console.log(action);
      return {
        ...state,
        id: action.payload.id,
      };
    }
    default:
      return state;
  }
};

export default getUserReducer;
