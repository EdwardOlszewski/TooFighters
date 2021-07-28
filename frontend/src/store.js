import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// User Reducers
import { userLoginReducer } from './reducers/userReducers'

// Tour Reducers
import {
  createTourDateReducer,
  listTourDatesReducer,
  listTourDateReducer,
  deleteTourDateReducer,
  updateTourDateReducer,
} from './reducers/tourReducers'

const reducer = combineReducers({
  // User Reducers
  userLogin: userLoginReducer,

  // Tour Reducers
  tourDateCreate: createTourDateReducer,
  tourDateList: listTourDatesReducer,
  tourDateDetails: listTourDateReducer,
  tourDateDelete: deleteTourDateReducer,
  tourDateUpdate: updateTourDateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

//const devTools = applyMiddleware(...middleware)
const devTools = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(reducer, initialState, devTools)

export default store
