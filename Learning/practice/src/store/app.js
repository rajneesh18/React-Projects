import { createStore } from "redux";
import Helper from "../reducer/helper";

var store = createStore(Helper);

export default store;