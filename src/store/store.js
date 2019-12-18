import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './reducers/UsersReducer';

const rootReducer = combineReducers({
  users: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
