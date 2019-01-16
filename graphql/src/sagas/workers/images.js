import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions';
import request from '../../api/request';

export default function* imagesWorker() {
  try {
    const response = yield call(request);
    const results = response.data;

    yield put(actions.getImagesSuccess(results));
  } catch (error) {
    yield put(actions.getImagesFailure(error));
  }
}
