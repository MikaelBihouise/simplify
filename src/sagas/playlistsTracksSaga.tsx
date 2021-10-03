import { takeEvery, put, call } from 'redux-saga/effects';
import playlistTracksTypes from '../containers/playlistTracks/playlistTracksTypes';
import { ResponseGenerator } from '../redux/types';
import getUserPlaylistTracks from '../containers/playlistTracks/playlistTracksServices';

function* getPlaylistsTracksWorker() {
  try {
    const playlist: ResponseGenerator = yield call(getUserPlaylistTracks);
    yield put({
      type: playlistTracksTypes.GET_USER_PLAYLISTS_TRACKS_SUCCESS,
      items: playlist,
    });
  } catch (err) {
    yield put({
      type: playlistTracksTypes.GET_USER_PLAYLISTS_TRACKS_FAILURE,
      items: err,
    });
  }
}

function* getPlaylistsTracksSaga() {
  yield takeEvery('GET_USER_PLAYLISTS_TRACKS_START', getPlaylistsTracksWorker);
}

export default getPlaylistsTracksSaga;
