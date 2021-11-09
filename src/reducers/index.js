import { combineReducers } from 'redux'

import demosReducer from './postreducer'

const rootReducer = combineReducers({
  demos: demosReducer,
})

export default rootReducer