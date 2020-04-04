import { MessagesState, MessagesActionTypes, MessagesAction } from './types';
import { Reducer } from 'react';

const INITIAL_STATE: MessagesState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<MessagesState, MessagesAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case MessagesActionTypes.INDEX_REQUEST:
      return { ...state, loading: true, error: false };
    case MessagesActionTypes.INDEX_SUCCESS:
      return { data: action.payload.data, loading: false, error: false };
    case MessagesActionTypes.INDEX_FAILURE:
      return state;
    default:
      return state;
  }
};

export default reducer;
