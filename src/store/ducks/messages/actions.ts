import { action } from 'typesafe-actions';
import { MessagesActionTypes, Message } from './types';
import { MessageCreateDto, MessageDeleteDto } from './dtos';
import { ValidationError } from '../../../servives/api';

export const indexRequest = () => action(MessagesActionTypes.INDEX_REQUEST);

export const indexSuccess = (data: Message[]) =>
  action(MessagesActionTypes.INDEX_SUCCESS, { data });

export const indexFailure = () => action(MessagesActionTypes.INDEX_FAILURE);

export const createRequest = (data: MessageCreateDto) =>
  action(MessagesActionTypes.CREATE_REQUEST, { data });

export const createSuccess = () => action(MessagesActionTypes.CREATE_SUCCESS);

export const createFailure = (errors: ValidationError[]) =>
  action(MessagesActionTypes.CREATE_FAILURE, errors);

export const deleteRequest = (data: MessageDeleteDto) =>
  action(MessagesActionTypes.DELETE_REQUEST, { data });

export const deleteSuccess = () => action(MessagesActionTypes.DELETE_SUCCESS);

export const deleteFailure = () => action(MessagesActionTypes.DELETE_FAILURE);
