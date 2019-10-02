import { combineReducers, applyMiddleware, createStore } from 'redux';
import { logger } from "redux-logger";
import thunk from 'redux-thunk';
import {workouts} from "./reducers/workoutsReducer";

export const rootReducer = combineReducers({
    workouts
});

export default function configureStore() {
    return createStore(workouts, applyMiddleware(thunk, logger));
}