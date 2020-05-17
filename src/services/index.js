import { combineReducers } from 'redux'
import reducer from './redux/reducer'

import saga from './redux/saga'

export const combinedReducers = combineReducers({
  reducer,
})

export const sagas = [saga]
