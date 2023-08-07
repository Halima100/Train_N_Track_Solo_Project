import { put, takeLatest } from "redux-saga/effects";

function* addWorkout(action) {
    try {
      yield fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: { "Content-Type": "application/json" },
      });
      yield put({ type: "FETCH_WORKOUT" });
    } catch (error) {
      console.log("Adding an element failed:", error);
    }
  }
  
  function* addWorkoutSaga() {
    yield takeLatest("ADD_WORKOUT", addWorkout);
  }
  export default addWorkoutSaga;