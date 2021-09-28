import { GetPlaylistActions, getPlaylistState } from '../redux/actions';
import playlistTypes from '../containers/playlistTypes';

const initialState: getPlaylistState = {
  pending: false,
  items: [],
};

const getPlaylistsReducer = (
  state: getPlaylistState = initialState,
  action: GetPlaylistActions
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
        items: action,
      };
    }
    case playlistTypes.GET_USER_PLAYLISTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action,
      };
    default: {
      return state;
    }
  }
};

export default getPlaylistsReducer;
