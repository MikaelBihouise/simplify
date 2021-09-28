import types from './types';

export type EmptyObject = Record<string, never>;

export const getUser = () => ({
  type: types.GET_USER,
  id: '',
});

export interface getUserSuccess {
  type: 'GET_USER_SUCCESS';
  id: string;
}

export interface getPlaylistState {
  pending: boolean;
  items: EmptyObject[];
}

export type getPlaylists = {
  type: 'GET_USER_PLAYLISTS_START';
  pending: boolean;
  items: EmptyObject[];
};

export type getPlaylistsSuccess = {
  type: 'GET_USER_PLAYLISTS_SUCCESS';
  pending: boolean;
  items: EmptyObject[];
};

export type getPlaylistsFailure = {
  type: 'GET_USER_PLAYLISTS_SUCCESS';
  pending: boolean;
  items: EmptyObject[];
};

export type GetPlaylistActions =
  | getPlaylists
  | getPlaylistsSuccess
  | getPlaylistsFailure;

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
