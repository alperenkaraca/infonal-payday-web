import { combineReducers } from 'redux'
import authReducer from './auth/reducer'

import authSaga from './auth/saga'

export const combinedReducers = combineReducers({
  authReducer,
})

export const sagas = [authSaga]
