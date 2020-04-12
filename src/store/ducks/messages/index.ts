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
      return { ...INITIAL_STATE, loading: true };
    case MessagesActionTypes.INDEX_SUCCESS:
      return { ...INITIAL_STATE, data: action.payload.data, loading: false };
    case MessagesActionTypes.INDEX_FAILURE:
      return { ...INITIAL_STATE, loading: false };
    case MessagesActionTypes.CREATE_REQUEST:
      return { ...INITIAL_STATE, loading: true, created: false };
    case MessagesActionTypes.CREATE_SUCCESS:
      return { ...INITIAL_STATE, loading: false, created: true };
    case MessagesActionTypes.CREATE_FAILURE:
      return { ...INITIAL_STATE, loading: false };
    case MessagesActionTypes.DELETE_REQUEST:
      return { ...INITIAL_STATE, loading: true, deleted: false };
    case MessagesActionTypes.DELETE_SUCCESS:
      return { ...INITIAL_STATE, loading: false, deleted: true };
    case MessagesActionTypes.DELETE_FAILURE:
      return { ...INITIAL_STATE, loading: false };
    default:
      return state;
  }
};

export default reducer;
