import { takeEvery, put, call } from 'redux-saga/effects';
import playlistTypes from '../containers/playlist/playlistTypes';
import { ResponseGenerator } from '../redux/types';
import getUserPlaylist from '../containers/playlist/playListServices';

function* getUserPlaylistsWorker() {
  try {
    const playlist: ResponseGenerator = yield call(getUserPlaylist);
    yield put({
      type: playlistTypes.GET_USER_PLAYLISTS_SUCCESS,
      items: playlist,
    });
  } catch (err) {
    yield put({ type: playlistTypes.GET_USER_PLAYLISTS_FAILURE, items: err });
  }
}

function* getUserPlaylistsSaga() {
  yield takeEvery('GET_USER_PLAYLISTS_START', getUserPlaylistsWorker);
}

export default getUserPlaylistsSaga;
