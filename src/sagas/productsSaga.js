import { call, put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS, setProductsAC } from "../store/productReducer";
import { client } from "../apolloClient";
import { GET_GOODS } from "../apolloClient/queries";

function* getProducts(action) {
    const res = yield call(() => client.query({
        query: GET_GOODS,
        variables: {
            query: JSON.stringify([
                { "_id": action.payload.categoryId },
                {},
            ])
        }
    }))

    yield put(setProductsAC({ data: res.data.CategoryFindOne.goods }));
}

export function* productsSaga() {
    yield takeEvery(GET_PRODUCTS, getProducts);
}