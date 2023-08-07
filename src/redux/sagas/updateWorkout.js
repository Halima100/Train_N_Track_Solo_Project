import { put, takeLatest } from "redux-saga/effects";

function* updateWorkout(action) {
  try {
    yield fetch(`/api/workouts/${action.payload.id}`, {
      method: "PUT",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/json" },
    });
    yield put({ type: "FETCH_WORKOUT" });
  } catch (error) {
    console.log("Updating client failed:", error);
  }
}
function* updateWorkoutSaga() {
  yield takeLatest("UPDATE_WORKOUT", updateWorkout);
}
export default updateWorkoutSaga;