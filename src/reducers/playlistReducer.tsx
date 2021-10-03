import { EmptyObject } from '../redux/types';
import playlistTypes, {
  getPlaylistState,
} from '../containers/playlist/playlistTypes';

const initialState: getPlaylistState = {
  type: 'GET_USER_PLAYLISTS_START',
  pending: false,
  items: {},
};

export type getPlaylists = {
  type: string;
  pending: boolean;
  items: EmptyObject;
};

type Action = { type: string; items: getPlaylists };

const getPlaylistsReducer = (
  state: getPlaylistState = initialState,
  action: Action
) => {
  switch (action.type) {
    case playlistTypes.GET_USER_PLAYLISTS_START:
      return {
        ...state,
        pending: true,
      };
    case playlistTypes.GET_USER_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        pending: false,
        items: action.items,
      };
    }
    case playlistTypes.GET_USER_PLAYLISTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.items,
      };
    default: {
      return state;
    }
  }
};

export default getPlaylistsReducer;
