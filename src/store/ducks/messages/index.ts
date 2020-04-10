import { MessagesState, MessagesActionTypes, MessagesAction } from './types';
import { Reducer } from 'react';

const INITIAL_STATE: MessagesState = {
  data: [],
  loading: false,
  errors: [],
};

const reducer: Reducer<MessagesState, MessagesAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case MessagesActionTypes.INDEX_REQUEST:
      return { ...state, loading: true, errors: [] };
    case MessagesActionTypes.INDEX_SUCCESS:
      return { data: action.payload.data, loading: false, errors: [] };
    case MessagesActionTypes.INDEX_FAILURE:
      return { ...state, loading: false, errors: [] };
    case MessagesActionTypes.CREATE_REQUEST:
      return { ...state, loading: true, errors: [] };
    case MessagesActionTypes.CREATE_SUCCESS:
      return { ...state, loading: false, errors: [] };
    case MessagesActionTypes.CREATE_FAILURE:
      return { ...state, loading: false, errors: action.payload.errors };
    default:
      return state;
  }
};

export default reducer;
