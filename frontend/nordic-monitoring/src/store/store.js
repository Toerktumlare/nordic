import { combineReducers, applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import Workouts from './reducers/workoutsReducer';

export const rootReducer = combineReducers({
  Workouts,
});

export default function configureStore() {
  return createStore(Workouts, applyMiddleware(thunk, logger));
}
