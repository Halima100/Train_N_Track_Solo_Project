import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* addClient(action) {
  try {
    const response = yield fetch(`/api/client_account/${action.payload}`);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const client = yield response.json();

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'ADD_CLIENT', payload: client });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* addClientSaga() {
  yield takeLatest('FETCH_CLIENTS', addClient);
}

export default addClientSaga;