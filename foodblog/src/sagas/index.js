import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchFood() {
  var json = null;
  yield axios({
    method: "get",
    url: process.env.REACT_APP_API_URL + "/foods",
  }).then(
    (res) => {
      json = res.data;
    },
    (error) => {
      console.log("Error from FOOD API", error);
    }
  );

  yield put({ type: "FOOD_RECEIVED", json: json });
}

function* actionWatcher() {
  yield takeLatest("GET_FOOD", fetchFood);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
