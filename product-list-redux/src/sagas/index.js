import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchProduct() {
  var json = null;

  yield axios({
    method: "get",
    url: process.env.REACT_APP_API_URL + "/products",
  }).then(
    (res) => {
      json = res.data;
    },
    (error) => {
      console.log("Error from FOOD API", error);
    }
  );

  yield put({ type: "PRODUCT_RECEIVED", data: json });
}

function* getProductDetail({ slug }) {
  var json = null;

  yield axios({
    method: "get",
    url: process.env.REACT_APP_API_URL + "/products?slug=" + slug,
  }).then(
    (res) => {
      json = res.data;
      return json;
    },
    (error) => {
      console.log("Error from FOOD API", error);
    }
  );

  yield put({ type: "PRODUCT_DETAIL_RECEIVED", data: json });
}

function* actionWatcher() {
  yield takeLatest("GET_PRODUCT", fetchProduct);
  yield takeLatest("GET_PRODUCT_DETAIL", getProductDetail);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
