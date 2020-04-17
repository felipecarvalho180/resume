
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  updateDarkMode: ['darkMode'],
});

const INITIAL_STATE = false;

const updateDarkMode = (state, action) => action.darkMode;

export default createReducer(INITIAL_STATE, {
  [Types.UPDATE_DARK_MODE]: updateDarkMode,
});