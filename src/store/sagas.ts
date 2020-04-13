import { all } from 'redux-saga/effects';
import MessageSagas from './messages/sagas';

export default function* () {
  yield all(MessageSagas);
}
