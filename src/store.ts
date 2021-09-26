import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/RootReducer';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

// sagaMiddleWare.run();

export default store;
