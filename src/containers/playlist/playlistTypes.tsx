import { EmptyObject } from '../../redux/types';

const playlistTypes = {
  GET_USER_PLAYLISTS_START: 'GET_USER_PLAYLISTS_START',
  GET_USER_PLAYLISTS_SUCCESS: 'GET_USER_PLAYLISTS_SUCCESS',
  GET_USER_PLAYLISTS_FAILURE: 'GET_USER_PLAYLISTS_FAILURE',
  CREATE_PLAYLIST_START: 'CREATE_PLAYLIST_START',
  CREATE_PLAYLIST_SUCCESS: 'CREATE_PLAYLIST_SUCCESS',
  CREATE_PLAYLIST_FAILURE: 'CREATE_PLAYLIST_FAILURE',
};

export interface getPlaylistState {
  type: string;
  pending: boolean;
  items: EmptyObject;
}

export type getPlaylists = {
  type: 'GET_USER_PLAYLISTS_START';
  pending: boolean;
  items: EmptyObject;
};

export type getPlaylistsSuccess = {
  type: 'GET_USER_PLAYLISTS_SUCCESS';
  pending: boolean;
  items: EmptyObject;
};

export type getPlaylistsFailure = {
  type: 'GET_USER_PLAYLISTS_SUCCESS';
  pending: boolean;
  items: EmptyObject;
};

export type GetPlaylistActions =
  | getPlaylists
  | getPlaylistsSuccess
  | getPlaylistsFailure;

export default playlistTypes;
