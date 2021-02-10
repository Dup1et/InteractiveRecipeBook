import { SET_THEME } from './types';

export const setTheme = (name: String) => ({
  type: SET_THEME,
  payload: name
});
