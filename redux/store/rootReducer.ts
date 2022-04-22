import { combineReducers } from "redux";
import entitiesReducer from './entities'; //For storing multiples reducers

export const rootReducer = combineReducers({
    entities: entitiesReducer
})

export type RootState = ReturnType<typeof rootReducer>