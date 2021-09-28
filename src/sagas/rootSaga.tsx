import { all, fork } from 'redux-saga/effects';
import getUserPlaylistsSaga from './playlistsSaga';

function* rootSaga() {
  yield all([fork(getUserPlaylistsSaga)]);
}

export default rootSaga;
