import { call, put, takeEvery } from "redux-saga/effects";
import { client } from "../apolloClient";
import { GET_ONE_GOOD } from "../apolloClient/queries";
import { GET_ONE_PRODUCT, setOneProductsAC } from "../store/oneProductReducer";

function* getOneProduct(action) {
   const res = yield call(() => client.query({
      query: GET_ONE_GOOD,
      variables: {
          query: JSON.stringify([
              { "_id": action.payload.productId},
              {}
          ])
      }
  }))

  yield put(setOneProductsAC({data: res.data.GoodFindOne}));
}

export function* oneProductSaga() {
    yield takeEvery(GET_ONE_PRODUCT, getOneProduct);
}