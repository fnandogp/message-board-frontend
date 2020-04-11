import { action } from 'typesafe-actions';
import { MessagesActionTypes, Message } from './types';
import { MessageCreateDto, MessageDeleteDto } from './dtos';

export const indexRequest = () => action(MessagesActionTypes.INDEX_REQUEST);

export const indexSuccess = (data: Message[]) =>
  action(MessagesActionTypes.INDEX_SUCCESS, { data });

export const indexFailure = () => action(MessagesActionTypes.INDEX_FAILURE);

export const createRequest = (data: MessageCreateDto) => {
  return action(MessagesActionTypes.CREATE_REQUEST, { data });
};

export const createSuccess = () => action(MessagesActionTypes.CREATE_SUCCESS);

export const createFailure = (errors: string[]) =>
  action(MessagesActionTypes.CREATE_FAILURE, { errors });

export const deleteRequest = (data: MessageDeleteDto) => {
  return action(MessagesActionTypes.DELETE_REQUEST, { data });
};

export const deleteSuccess = () => {
  return action(MessagesActionTypes.DELETE_SUCCESS);
};

export const deleteFailure = (errors: string[]) => {
  return action(MessagesActionTypes.DELETE_FAILURE, { errors });
};
