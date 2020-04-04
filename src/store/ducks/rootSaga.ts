import { all, takeLatest } from 'redux-saga/effects';
import { MessagesActionTypes } from './messages/types';
import { index } from './messages/sagas';

export default function* () {
  yield all([takeLatest(MessagesActionTypes.INDEX_REQUEST, index)]);
}
