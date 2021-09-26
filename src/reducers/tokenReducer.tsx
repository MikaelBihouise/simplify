import { SpotifyToken } from '../authentification';

const initialState: SpotifyToken = {
  access_token: '',
  token_type: '',
  expire_in: 0,
  state: '',
};

type Action = { type: 'ADD_TOKEN'; payload: SpotifyToken };

const tokenReducer = (state: SpotifyToken = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TOKEN': {
      return {
        ...state,
        access_token: action.payload.access_token,
        token_type: action.payload.token_type,
        expire_in: action.payload.expire_in,
        state: action.payload.state,
      };
    }
    default:
      return state;
  }
};

export default tokenReducer;
