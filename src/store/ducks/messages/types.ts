export interface Message {
  id: string;
  content: string;
  author: string;
}

export interface MessagesState {
  data: Message[];
  loading: boolean;
  error: boolean;
}

export enum MessagesActionTypes {
  INDEX_REQUEST = '@MESSAGES/INDEX_REQUEST',
  INDEX_SUCCESS = '@MESSAGES/INDEX_SUCCESS',
  INDEX_FAILURE = '@MESSAGES/INDEX_FAILURE',
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

export type MessagesAction =
  | MessagesIndexRequestAction
  | MessagesIndexSuccessAction
  | MessagesIndexFailureAction;
