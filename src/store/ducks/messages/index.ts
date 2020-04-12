import { MessagesState, MessagesActionTypes, MessagesAction } from './types';
import { Reducer } from 'react';

const INITIAL_STATE: MessagesState = {
  data: [],
  loading: false,
  created: false,
  deleted: false,
};

const reducer: Reducer<MessagesState, MessagesAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case MessagesActionTypes.INDEX_REQUEST:
      return { ...state, loading: true };
    case MessagesActionTypes.INDEX_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    case MessagesActionTypes.INDEX_FAILURE:
      return { ...state, loading: false };
    case MessagesActionTypes.CREATE_REQUEST:
      return { ...state, loading: true, created: false };
    case MessagesActionTypes.CREATE_SUCCESS:
      return { ...state, loading: false, created: true };
    case MessagesActionTypes.CREATE_FAILURE:
      return { ...state, loading: false };
    case MessagesActionTypes.DELETE_REQUEST:
      return { ...state, loading: true, deleted: false };
    case MessagesActionTypes.DELETE_SUCCESS:
      return { ...state, loading: false, deleted: true };
    case MessagesActionTypes.DELETE_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
