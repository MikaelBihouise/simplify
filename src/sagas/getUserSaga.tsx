import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import types from '../redux/types';
import { getUserSuccess } from '../redux/actions';

// function* getUserWorker() {
//   try {
//     const response: string = yield call();
//     const data: getUserSuccess = {
//       type: 'GET_USER_SUCCESS',
//       id: response,
//     };
//     put(data);
//     return data.id;
//   } catch (err) {
//     return err;
//   }
// }

// function* getUserSaga(): Generator<StrictEffect> {
//   yield takeEvery(types.GET_USER, getUserWorker);
// }

// export default getUserSaga;
