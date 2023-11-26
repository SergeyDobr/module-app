import { call, put, takeEvery } from "redux-saga/effects";
import { client } from "../apolloClient";
import { GET_CATEGORIES, setCategoriesAC } from "../store/categoriesReducer";
import { GET_CATEGORIES_SCHEMA } from "../apolloClient/queries"



function* getCategories() {
  
   const res = yield call(() => client.query({
     query: GET_CATEGORIES_SCHEMA,
     variables: {
       query: JSON.stringify([
         {},
         

       ])
     }
   }))
   yield put(setCategoriesAC({ data: res.data.CategoryFind }));
}

export function* categoriesSaga() {
 yield takeEvery(GET_CATEGORIES, getCategories);
}