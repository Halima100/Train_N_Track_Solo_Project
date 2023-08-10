import { put, takeLatest } from "redux-saga/effects";

function* updateWorkout(action) {

  try {
  const history = action.payload.history; 
   yield fetch(`/api/workouts/${action.payload.id}/${action.payload.client_id}`, {
      method: "PUT",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/json" },
    });
    yield put({ type: "FETCH_WORKOUT" });
    history.push(`/ClientAccount/${action.payload.client_id}`)
  } catch (error) {
    console.log("Updating client failed:", error);
  }
}
function* updateWorkoutSaga() {
  yield takeLatest("UPDATE_WORKOUT", updateWorkout);
}
export default updateWorkoutSaga;