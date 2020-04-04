import { action } from 'typesafe-actions';
import { MessagesActionTypes, Message } from './types';

export const indexRequest = () => action(MessagesActionTypes.INDEX_REQUEST);

export const indexSuccess = (data: Message[]) =>
  action(MessagesActionTypes.INDEX_SUCCESS, { data });

export const indexFailure = () => action(MessagesActionTypes.INDEX_FAILURE);
