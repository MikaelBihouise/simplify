import { takeEvery, put, call } from 'redux-saga/effects';
import userTypes from '../containers/user/userTypes';
import { ResponseGenerator } from '../redux/types';
import getUser from '../containers/user/userServices';

function* getUserWorker() {
  try {
    const user: ResponseGenerator = yield call(getUser);
    yield put({
      type: userTypes.GET_USER_SUCCESS,
      id: user,
    });
  } catch (err) {
    yield put({ type: userTypes.GET_USER_FAILURE, id: err });
  }
}

function* getUserSaga() {
  yield takeEvery('GET_USER_START', getUserWorker);
}

export default getUserSaga;
