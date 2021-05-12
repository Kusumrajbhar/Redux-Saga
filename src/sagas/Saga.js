import { delay } from "redux-saga/effects";

import { takeLatest, put } from "redux-saga/effects"; //takeEvery watch each state changet, put-to dispatch

function* ageUpAsync() {
  yield delay(4000); //like set time out as it behaves like async put will called only after delay
  yield put({ type: "AGE_UP_ASYNC" }); //now change reducer with this type
}

export function* watchAgeUp() {
  //* generator function yield  is its property it won't execute untile
  yield takeLatest("AGE_UP", ageUpAsync); //first condition not satisfied same like async
}

//here never keep both these actions same else it will go in infinite loop
//takeEvery took each state and how many times button clicked it will increse that much of time after delay 
//hence use takeLatest it will execute latest state so whatever times button clicked increses one time
