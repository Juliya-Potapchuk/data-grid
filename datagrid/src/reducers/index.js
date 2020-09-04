import { combineReducers } from 'redux'
import { sortReducer } from './sort'

export const rootReducer = combineReducers({
  sort: sortReducer,
})
