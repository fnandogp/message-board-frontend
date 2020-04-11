import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../servives/api';
import {
  indexSuccess,
  indexFailure,
  createSuccess,
  createFailure,
  deleteSuccess,
  deleteFailure,
} from './actions';
import {
  MessagesActionTypes,
  MessagesCreateRequestAction,
  MessagesDeleteRequestAction,
} from './types';

export function* index() {
  try {
    const response = yield call(api.get, 'messages');
    yield put(indexSuccess(response.data));
  } catch (error) {
    yield put(indexFailure());
  }
}

export function* create(action: MessagesCreateRequestAction) {
  try {
    yield call(api.post, 'messages', action.payload.data);
    yield put(createSuccess());
  } catch (error) {
    yield put(createFailure(error.response.data.message ?? []));
  }
}

export function* del(action: MessagesDeleteRequestAction) {
  try {
    yield call(api.delete, `messages/${action.payload.data.id}`);
    yield put(deleteSuccess());
  } catch (error) {
    yield put(deleteFailure(error.response.data.message ?? []));
  }
}

export default [
  takeLatest(MessagesActionTypes.INDEX_REQUEST, index),
  takeLatest(MessagesActionTypes.CREATE_REQUEST, create),
  takeLatest(MessagesActionTypes.DELETE_REQUEST, del),
];
