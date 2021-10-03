import { EmptyObject } from '../redux/types';
import playlistTracksTypes, {
  getPlaylistTracksState,
} from '../containers/playlistTracks/playlistTracksTypes';

const initialState: getPlaylistTracksState = {
  type: 'GET_USER_PLAYLISTS_TRACKS_START',
  pending: false,
  items: {},
};

export type getPlaylistsTracks = {
  type: string;
  pending: boolean;
  items: EmptyObject;
};

type Action = { type: string; items: getPlaylistsTracks };

const getPlaylistsTracksReducer = (
  state: getPlaylistTracksState = initialState,
  action: Action
) => {
  switch (action.type) {
    case playlistTracksTypes.GET_USER_PLAYLISTS_TRACKS_START:
      return {
        ...state,
        pending: true,
      };
    case playlistTracksTypes.GET_USER_PLAYLISTS_TRACKS_SUCCESS: {
      return {
        ...state,
        pending: false,
        items: action.items,
      };
    }
    case playlistTracksTypes.GET_USER_PLAYLISTS_TRACKS_FAILURE:
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

export default getPlaylistsTracksReducer;
