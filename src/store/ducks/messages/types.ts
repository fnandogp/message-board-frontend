import { MessageCreateDto } from './dtos';

export interface Message {
  id: string;
  content: string;
  author: string;
}

export interface MessagesState {
  data: Message[];
  errors: string[];
  loading: boolean;
  created: boolean;
}

export enum MessagesActionTypes {
  INDEX_REQUEST = '@MESSAGES/INDEX_REQUEST',
  INDEX_SUCCESS = '@MESSAGES/INDEX_SUCCESS',
  INDEX_FAILURE = '@MESSAGES/INDEX_FAILURE',
  CREATE_REQUEST = '@MESSAGES/CREATE_REQUEST',
  CREATE_SUCCESS = '@MESSAGES/CREATE_SUCCESS',
  CREATE_FAILURE = '@MESSAGES/CREATE_FAILURE',
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
  payload: {
    data: Message;
  };
}

export interface MessagesCreateFailureAction {
  type: MessagesActionTypes.CREATE_FAILURE;
  payload: { errors: string[] };
}

export type MessagesAction =
  | MessagesIndexRequestAction
  | MessagesIndexSuccessAction
  | MessagesIndexFailureAction
  | MessagesCreateRequestAction
  | MessagesCreateSuccessAction
  | MessagesCreateFailureAction;
