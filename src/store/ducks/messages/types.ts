import { MessageCreateDto, MessageDeleteDto } from './dtos';
import { ValidationError } from '../../../servives/api';

export interface Message {
  id: string;
  content: string;
  author: string;
}

export interface MessagesState {
  data: Message[];
  loading: boolean;
  errors: ValidationError[];
}

export enum MessagesActionTypes {
  INDEX_REQUEST = '@MESSAGES/INDEX_REQUEST',
  INDEX_SUCCESS = '@MESSAGES/INDEX_SUCCESS',
  INDEX_FAILURE = '@MESSAGES/INDEX_FAILURE',
  CREATE_REQUEST = '@MESSAGES/CREATE_REQUEST',
  CREATE_SUCCESS = '@MESSAGES/CREATE_SUCCESS',
  CREATE_FAILURE = '@MESSAGES/CREATE_FAILURE',
  DELETE_REQUEST = '@MESSAGES/DELETE_REQUEST',
  DELETE_SUCCESS = '@MESSAGES/DELETE_SUCCESS',
  DELETE_FAILURE = '@MESSAGES/DELETE_FAILURE',
}

export interface MessagesIndexRequestAction {
  type: MessagesActionTypes.INDEX_REQUEST;
}

export interface MessagesIndexSuccessAction {
  type: MessagesActionTypes.INDEX_SUCCESS;
  payload: {
    data: Message[];
  };
}

export interface MessagesIndexFailureAction {
  type: MessagesActionTypes.INDEX_FAILURE;
}

export interface MessagesCreateRequestAction {
  type: MessagesActionTypes.CREATE_REQUEST;
  payload: { data: MessageCreateDto };
}

export interface MessagesCreateSuccessAction {
  type: MessagesActionTypes.CREATE_SUCCESS;
  payload: { data: Message };
}

export interface MessagesCreateFailureAction {
  type: MessagesActionTypes.CREATE_FAILURE;
  payload: ValidationError[];
}

export interface MessagesDeleteRequestAction {
  type: MessagesActionTypes.DELETE_REQUEST;
  payload: { data: MessageDeleteDto };
}

export interface MessagesDeleteSuccessAction {
  type: MessagesActionTypes.DELETE_SUCCESS;
}

export interface MessagesDeleteFailureAction {
  type: MessagesActionTypes.DELETE_FAILURE;
}

export type MessagesAction =
  | MessagesIndexRequestAction
  | MessagesIndexSuccessAction
  | MessagesIndexFailureAction
  | MessagesCreateRequestAction
  | MessagesCreateSuccessAction
  | MessagesCreateFailureAction
  | MessagesDeleteRequestAction
  | MessagesDeleteSuccessAction
  | MessagesDeleteFailureAction;
