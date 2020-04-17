
import { combineReducers } from 'redux';

import darkModeReducer from './dark-mode/dark-mode.reducer';

export default combineReducers({
  darkMode: darkModeReducer,
});