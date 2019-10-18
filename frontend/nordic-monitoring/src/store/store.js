import { combineReducers, applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import workoutsReducer from './reducers/workoutsReducer';
import participantsReducer from './reducers/participantsReducer';


export const rootReducer = combineReducers({
  workouts: workoutsReducer,
  attendees: participantsReducer,
});

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}
