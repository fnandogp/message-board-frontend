import { call, put, takeLatest } from 'redux-saga/effects';
import api, { ValidationError } from '../../../servives/api';
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
import { push } from 'connected-react-router';

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
    yield call(api.post, 'messages', action.payload.data);
    yield put(createSuccess());
    yield put(push('/'));
  } catch (error) {
    const errors: ValidationError[] = error.response.data.message ?? [];

    yield put(createFailure(errors));
  }
}

export function* del(action: MessagesDeleteRequestAction) {
  try {
    yield call(api.delete, `messages/${action.payload.data.id}`);
    yield put(deleteSuccess());
  } catch (error) {
    //const items: string[] = error.response.data.message ?? [];

    yield put(deleteFailure());
  }
}

export default [
  takeLatest(MessagesActionTypes.INDEX_REQUEST, index),
  takeLatest(MessagesActionTypes.CREATE_REQUEST, create),
  takeLatest(MessagesActionTypes.DELETE_REQUEST, del),
];
