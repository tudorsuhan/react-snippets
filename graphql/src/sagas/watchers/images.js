import { all, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../../actions';
import imagesWorker from '../workers/images';

function* watchGetImages() {
  yield takeEvery(actions.getImages, imagesWorker);
}

function* watchInitApplication() {
  yield put(actions.getImages());
}

export default function* imagesWatcher() {
  yield all([
    watchInitApplication(),
    watchGetImages(),
  ]);
}
