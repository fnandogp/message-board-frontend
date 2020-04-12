export interface AlertState {
  success: string[];
  info: string[];
  warning: string[];
  danger: string[];
}

export enum AlertActionTypes {
  SET = '@ALERT/SET',
  RESET = '@ALERT/RESET',
}

export interface AlertAddAction {
  type: AlertActionTypes.SET;
  payload: {
    type: string;
    items: string[];
  };
}

export interface AlertResetAction {
  type: AlertActionTypes.RESET;
}

export type AlertActions = AlertAddAction | AlertResetAction;
