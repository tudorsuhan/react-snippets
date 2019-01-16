import { all, spawn } from 'redux-saga/effects';
import imagesWatcher from './watchers/images';

export default function* rootSaga() {
  yield all([
    spawn(imagesWatcher),
  ]);
}
