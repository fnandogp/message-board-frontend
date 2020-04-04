import { call, put } from 'redux-saga/effects';
import api from '../../../servives/api';
import { indexSuccess, indexFailure } from './actions';

export function* index() {
  try {
    const response = yield call(api.get, 'messages');
    console.log('response.data', response.data);
    yield put(indexSuccess(response.data));
  } catch (error) {
    yield put(indexFailure());
  }
}
