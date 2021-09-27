import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import getUserReducer from './getUserReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  user: getUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
