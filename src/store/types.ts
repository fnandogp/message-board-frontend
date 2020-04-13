import { MessagesState } from './messages/types';

export interface ApplicationState {
  messages: MessagesState;
}

export interface ValidationError {
  value: string;
  property: string;
  constraints: {
    [constraint: string]: string;
  };
}
