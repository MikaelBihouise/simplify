import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/RootReducer';
// import getUserSaga from './sagas/getUserSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

// sagaMiddleWare.run(getUserSaga);

export default store;
