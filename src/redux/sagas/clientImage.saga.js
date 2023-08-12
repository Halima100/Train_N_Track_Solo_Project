import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_IMAGE" actions
function* fetchImage() {
  try {
    const response = yield fetch('api/client_images');
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const image = yield response.json();
    // now that the session has given us a client object
    yield put({ type: "SET_IMAGE", payload: image });
  } catch (error) {
    console.log("User get request failed", error);

  }
}

function* ImageSaga() {
    yield takeLatest("FETCH_IMAGE", fetchImage);
  
  }
  
  export default ImageSaga;