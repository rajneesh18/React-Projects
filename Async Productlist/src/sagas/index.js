import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchProduct() {
    const json = yield fetch('http://localhost:3000/products')
        .then(response => response.json() );

    yield put({ type: "PRODUCT_RECEIVED", json:json });
}

function* actionWatcher() {
    yield takeLatest('GET_PRODUCT', fetchProduct)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}