import playlistTypes from './playlistTypes';
import { ResponseGenerator } from '../../redux/types';

export interface getUserPlaylistFailure {
  error: string;
}

export const createPlaylistStart = (payload: string) => ({
  type: playlistTypes.CREATE_PLAYLIST_START,
  payload,
});

export const createPlaylistSuccess = (payload: string) => ({
  type: playlistTypes.CREATE_PLAYLIST_SUCCESS,
  payload,
});

export const createPlaylistFailure = (payload: string) => ({
  type: playlistTypes.CREATE_PLAYLIST_FAILURE,
  payload,
});

export const getUserPlaylistsStart = () => ({
  type: playlistTypes.GET_USER_PLAYLISTS_START,
});

export const getUserPlaylistsSuccess = (payload: ResponseGenerator) => ({
  type: playlistTypes.GET_USER_PLAYLISTS_SUCCESS,
  payload,
});

export const getUserPlaylistsFailure = (payload: getUserPlaylistFailure) => ({
  type: playlistTypes.GET_USER_PLAYLISTS_FAILURE,
  payload,
});
