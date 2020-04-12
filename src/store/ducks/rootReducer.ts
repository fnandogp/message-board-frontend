import { combineReducers } from 'redux';

import messages from './messages';
import alert from './alert';

export default combineReducers({
  messages,
  alert,
});
