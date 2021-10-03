import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import getUserReducer from './getUserReducer';
import getPlaylistsReducer from './playlistReducer';
import getPlaylistsTracksReducer from './playlistTracksReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  user: getUserReducer,
  playlist: getPlaylistsReducer,
  playlistTracks: getPlaylistsTracksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
