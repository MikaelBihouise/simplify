import { all } from 'redux-saga/effects';
import getUserPlaylistsSaga from './playlistsSaga';
import getUserSaga from './userSaga';

export default function* rootSaga() {
  yield all([getUserPlaylistsSaga(), getUserSaga()]);
}
