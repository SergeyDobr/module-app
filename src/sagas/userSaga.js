// import { put, takeEvery, call } from "redux-saga/effects";
// import { client } from "../apolloClient";
// import { GET_TOKEN } from "../gql/graphqlQueries";
// import {setUserTokenAC, SET_USER_TOKEN} from "../store/userReducer"

// // WORKERS
// function* getToken(action) {
//   const res = yield call(() => client.query({
//     query: GET_TOKEN,
//     variables: {
//       ...action.payload
//     }
//   }))
//   yield put(setUserTokenAC(res.data.login));
// }




// // WATCHER
// export function* userSaga() {
//   yield takeEvery(SET_USER_TOKEN, getToken);
// }
