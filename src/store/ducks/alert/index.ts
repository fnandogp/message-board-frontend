import { AlertState, AlertActionTypes, AlertActions } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: AlertState = {
  success: [],
  info: [],
  warning: [],
  danger: [],
};

const reducer: Reducer<AlertState, AlertActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case AlertActionTypes.SET: {
      const { type, items } = action.payload;
      return { ...state, [type]: items };
    }
    case AlertActionTypes.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
