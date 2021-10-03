import { all } from 'redux-saga/effects';
import getUserPlaylistsSaga from './playlistsSaga';
import getUserSaga from './userSaga';
import getPlaylistsTracksSaga from './playlistsTracksSaga';

export default function* rootSaga() {
  yield all([getUserPlaylistsSaga(), getUserSaga(), getPlaylistsTracksSaga()]);
}
