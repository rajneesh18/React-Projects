import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import Helper from '../reducer/helper';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

var store = createStore(Helper, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;