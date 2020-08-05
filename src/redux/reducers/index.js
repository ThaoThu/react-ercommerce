import { combineReducers } from 'redux'
import userReducer  from './userReducer'
import commonReducer from './commonReducer'
import fileUploadReducer from './fileUploadReducer'
import { studentReducer } from './studentReducer'

const rootReducer = combineReducers({
  userReducer,
  commonReducer,
  fileUploadReducer,
  studentReducer
})

export default rootReducer
