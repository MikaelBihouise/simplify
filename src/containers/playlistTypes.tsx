const playlistTypes = {
  GET_USER_PLAYLISTS_START: 'GET_USER_PLAYLISTS_START',
  GET_USER_PLAYLISTS_SUCCESS: 'GET_USER_PLAYLISTS_SUCCESS',
  GET_USER_PLAYLISTS_FAILURE: 'GET_USER_PLAYLISTS_FAILURE',
  CREATE_PLAYLIST_START: 'CREATE_PLAYLIST_START',
  CREATE_PLAYLIST_SUCCESS: 'CREATE_PLAYLIST_SUCCESS',
  CREATE_PLAYLIST_FAILURE: 'CREATE_PLAYLIST_FAILURE',
};

export interface getUserPlaylistFailure {
  error: string;
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  items: any;
}

export default playlistTypes;
