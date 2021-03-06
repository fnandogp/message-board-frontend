import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../servives/api';
import { ValidationError } from '../types';
import {
  createFailure,
  createSuccess,
  deleteFailure,
  deleteSuccess,
  indexFailure,
  indexRequest,
  indexSuccess,
} from './actions';
import {
  MessagesActionTypes,
  MessagesCreateRequestAction,
  MessagesDeleteRequestAction,
} from './types';
import { toast } from 'react-toastify';

export function* index() {
  try {
    const response = yield call(api.get, 'messages');
    yield put(indexSuccess(response.data.data));
  } catch (error) {
    yield put(indexFailure());
  }
}

export function* create(action: MessagesCreateRequestAction) {
  try {
    const response = yield call(api.post, 'messages', action.payload.data);
    yield put(createSuccess());
    yield call(toast.success, response.data.message);
    yield put(push('/'));
  } catch (error) {
    const errors: ValidationError[] = error.response.data.message ?? [];

    yield put(createFailure(errors));
  }
}

export function* del(action: MessagesDeleteRequestAction) {
  try {
    const response = yield call(
      api.delete,
      `messages/${action.payload.data.id}`,
    );
    yield put(deleteSuccess());
    yield put(indexRequest());
    yield call(toast.success, response.data.message);
  } catch (error) {
    yield put(deleteFailure());
  }
}

export default [
  takeLatest(MessagesActionTypes.INDEX_REQUEST, index),
  takeLatest(MessagesActionTypes.CREATE_REQUEST, create),
  takeLatest(MessagesActionTypes.DELETE_REQUEST, del),
];
