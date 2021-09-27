import types from './types';

export const getUser = () => ({
  type: types.GET_USER,
  id: '',
});

export interface getUserSuccess {
  type: 'GET_USER_SUCCESS';
  id: string;
}

export const searchTrack = (
  q: string,
  type: string,
  market: string,
  limit: number,
  offset: number,
  token: string
) => ({
  typeAction: types.SEARCH_TRACK,
  q,
  type,
  market,
  limit,
  offset,
  token,
});

export const getTrack = (name: string, token: string) => ({
  type: types.GET_TRACK,
  name,
  token,
});

export const getPlaylist = (limit: number, offset: number, token: string) => ({
  type: types.GET_PLAYLISTS,
  limit,
  offset,
  token,
});

export const addPlaylist = (
  name: string,
  description: string,
  publique: boolean,
  token: string
) => ({
  type: types.ADD_PLAYLIST,
  name,
  description,
  publique,
  token,
});
