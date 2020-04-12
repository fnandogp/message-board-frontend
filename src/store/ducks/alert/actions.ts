import { action } from 'typesafe-actions';
import { AlertActionTypes } from './types';
import { AlertDto } from './dto';

export const set = (data: AlertDto) => action(AlertActionTypes.SET, data);

export const reset = () => action(AlertActionTypes.RESET);
