import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_WORKOUT" actions
function* fetchWorkouts(action) {
  try {
    const response = yield fetch(`/api/workouts/${action.payload}`);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const workout = yield response.json();

    // now that the session has given us a workout object
    yield put({ type: 'SET_WORKOUT', payload: workout });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* workoutSaga() {
  yield takeLatest('FETCH_WORKOUT', fetchWorkouts);
}

export default workoutSaga;
