import { put, takeLatest } from "redux-saga/effects";

function* updateClient(action) {
  try {
    yield fetch(`/api/client_account/${action.payload.id}`, {
      method: "PUT",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/json" },
    });
    yield put({ type: "FETCH_CLIENTS" });
  } catch (error) {
    console.log("Updating client failed:", error);
  }
}
function* updateClientSaga() {
  yield takeLatest("UPDATE_CLIENT", updateClient);
}
export default updateClientSaga;
