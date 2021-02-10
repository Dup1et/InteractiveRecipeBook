import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
