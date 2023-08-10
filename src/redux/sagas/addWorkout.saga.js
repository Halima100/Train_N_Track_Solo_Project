import { put, takeLatest } from "redux-saga/effects";

function* addWorkout(action) {
    try {
        const history = action.payload.history; 
      yield fetch(`/api/workouts/${action.payload.client_id}`, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: { "Content-Type": "application/json" },
      });
      yield put({ type: "FETCH_WORKOUT" });
      history.push(`/ClientAccount/${action.payload.client_id}`)
    } catch (error) {
      console.log("Adding an element failed:", error);
    }
  }
  
  function* addWorkoutSaga() {
    yield takeLatest("ADD_WORKOUT", addWorkout);
  }
  export default addWorkoutSaga;