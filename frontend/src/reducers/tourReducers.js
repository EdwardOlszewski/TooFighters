import {
  TOUR_DATE_CREATE_REQUEST,
  TOUR_DATE_CREATE_SUCCESS,
  TOUR_DATE_CREATE_FAIL,
  TOUR_DATE_REQUEST,
  TOUR_DATE_SUCCESS,
  TOUR_DATE_FAIL,
  TOUR_DATES_REQUEST,
  TOUR_DATES_SUCCESS,
  TOUR_DATES_FAIL,
  TOUR_DATE_DELETE_REQUEST,
  TOUR_DATE_DELETE_SUCCESS,
  TOUR_DATE_DELETE_FAIL,
  TOUR_DATE_UPDATE_REQUEST,
  TOUR_DATE_UPDATE_SUCCESS,
  TOUR_DATE_UPDATE_FAIL,
  TOUR_DATE_CREATE_RESET,
  TOUR_DATE_UPDATE_RESET,
} from '../constants/tourConstants'

export const createTourDateReducer = (state = { createdDate: {} }, action) => {
  switch (action.type) {
    case TOUR_DATE_CREATE_REQUEST:
      return { ...state, loading: true, success: false }
    case TOUR_DATE_CREATE_SUCCESS:
      return { success: true, loading: false, createdDate: action.payload }
    case TOUR_DATE_CREATE_FAIL:
      return { loadng: false, error: action.payload }
    case TOUR_DATE_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const listTourDatesReducer = (state = { dates: {} }, action) => {
  switch (action.type) {
    case TOUR_DATES_REQUEST:
      return { ...state, loading: true, success: false }
    case TOUR_DATES_SUCCESS:
      return { success: true, loading: false, dates: action.payload }
    case TOUR_DATES_FAIL:
      return { loadng: false, error: action.payload }
    default:
      return state
  }
}

export const listTourDateReducer = (state = { date: {} }, action) => {
  switch (action.type) {
    case TOUR_DATE_REQUEST:
      return { ...state, loading: true, success: false }
    case TOUR_DATE_SUCCESS:
      return { success: true, loading: false, date: action.payload }
    case TOUR_DATE_FAIL:
      return { loadng: false, error: action.payload }
    default:
      return state
  }
}

export const deleteTourDateReducer = (state = { deletedDate: {} }, action) => {
  switch (action.type) {
    case TOUR_DATE_DELETE_REQUEST:
      return { ...state, loading: true, success: false }
    case TOUR_DATE_DELETE_SUCCESS:
      return { success: true, loading: false, deletedDate: action.payload }
    case TOUR_DATE_DELETE_FAIL:
      return { loadng: false, error: action.payload }
    default:
      return state
  }
}

export const updateTourDateReducer = (state = { updatedDate: {} }, action) => {
  switch (action.type) {
    case TOUR_DATE_UPDATE_REQUEST:
      return { ...state, loading: true, success: false }
    case TOUR_DATE_UPDATE_SUCCESS:
      return { success: true, loading: false, updatedDate: action.payload }
    case TOUR_DATE_UPDATE_FAIL:
      return { loadng: false, error: action.payload }
    case TOUR_DATE_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
