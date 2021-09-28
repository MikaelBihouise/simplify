import { takeLatest, put, call } from 'redux-saga/effects';
import types from '../redux/types';
import * as services from '../containers/playListServices';
import * as actions from '../containers/playlistActions';
import { ResponseGenerator } from '../containers/playlistTypes';

function* getUserPlaylists() {
  try {
    const response: ResponseGenerator = yield call(services.getUserPlaylists);
    yield put(
      actions.getUserPlaylistsSuccess({
        items: response,
      })
    );
    return response;
  } catch (err) {
    yield put(
      actions.getUserPlaylistsFailure({
        error: 'error',
      })
    );
    return err;
  }
}

function* getUserPlaylistsSaga() {
  yield takeLatest(types.GET_USER_PLAYLISTS_START, getUserPlaylists);
}

export default getUserPlaylistsSaga;
