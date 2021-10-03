import { EmptyObject } from '../../redux/types';

const playlistTracksTypes = {
  GET_USER_PLAYLISTS_TRACKS_START: 'GET_USER_PLAYLISTS_TRACKS_START',
  GET_USER_PLAYLISTS_TRACKS_SUCCESS: 'GET_USER_PLAYLISTS_TRACKS_SUCCESS',
  GET_USER_PLAYLISTS_TRACKS_FAILURE: 'GET_USER_PLAYLISTS_TRACKS_FAILURE',
};

export interface getPlaylistTracksState {
  type: string;
  pending: boolean;
  items: EmptyObject;
}

export type getPlaylistsTracks = {
  type: 'GET_USER_PLAYLISTS_TRACKS_START';
  pending: boolean;
  items: EmptyObject;
};

export type getPlaylistsTracksSuccess = {
  type: 'GET_USER_PLAYLISTS_TRACKS_SUCCESS';
  pending: boolean;
  items: EmptyObject;
};

export type getPlaylistsTracksFailure = {
  type: 'GET_USER_PLAYLISTS_TRACKS_SUCCESS';
  pending: boolean;
  items: EmptyObject;
};

export type GetPlaylistActions =
  | getPlaylistsTracks
  | getPlaylistsTracksSuccess
  | getPlaylistsTracksFailure;

export default playlistTracksTypes;
