import playlistTracksTypes from './playlistTracksTypes';
import { ResponseGenerator } from '../../redux/types';

export interface getUserPlaylistTracksFailure {
  error: string;
}

export const getUserPlaylistsTracksStart = () => ({
  type: playlistTracksTypes.GET_USER_PLAYLISTS_TRACKS_START,
});

export const getUserPlaylistsTracksSuccess = (payload: ResponseGenerator) => ({
  type: playlistTracksTypes.GET_USER_PLAYLISTS_TRACKS_SUCCESS,
  payload,
});

export const getUserPlaylistsTracksFailure = (
  payload: getUserPlaylistTracksFailure
) => ({
  type: playlistTracksTypes.GET_USER_PLAYLISTS_TRACKS_FAILURE,
  payload,
});
