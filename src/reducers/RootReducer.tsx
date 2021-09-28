import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import getUserReducer from './getUserReducer';
import getPlaylistsReducer from './playlistReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  user: getUserReducer,
  playlist: getPlaylistsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
