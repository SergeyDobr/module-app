import { all } from "redux-saga/effects";
import { categoriesSaga } from "./categorySaga";
import {productsSaga} from "./productsSaga"
import { oneProductSaga } from "./oneProductSaga";
// import { userSaga } from "./userSaga";

export function* rootSaga() {
    yield all([categoriesSaga(), productsSaga(), oneProductSaga()]);
}