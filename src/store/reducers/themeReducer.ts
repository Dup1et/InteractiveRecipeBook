import { SET_THEME } from '../actions/types';

const initialState = {
  name: 'light'
};

const themeReducer = (
  state = initialState,
  action: {
    type: String;
    payload: String;
  }
) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
