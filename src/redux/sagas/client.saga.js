import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_CLIENT" actions
function* fetchClients(action) {
  try {
    const response = yield fetch(`/api/client_account`);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const client = yield response.json();

    // now that the session has given us a client object
    yield put({ type: "SET_CLIENT", payload: client });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* fetchClientDetail(action) {
  try {
    console.log(action.payload, "payload")
    const response = yield fetch(`/api/client_account/${action.payload}`);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const client = yield response.json();

    // now that the session has given us a client object
    yield put({ type: "SET_CLIENT_DETAIL", payload: client });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* clientSaga() {
  yield takeLatest("FETCH_CLIENTS", fetchClients);
  yield takeLatest("FETCH_CLIENT_DETAILS", fetchClientDetail);
}

export default clientSaga;
