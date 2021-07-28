import axios from 'axios'
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
} from '../constants/tourConstants'

export const createTourDate = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOUR_DATE_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/tour', {}, config)

    dispatch({
      type: TOUR_DATE_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: TOUR_DATE_CREATE_FAIL,
      payload: message,
    })
  }
}

export const listTourDates = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOUR_DATES_REQUEST,
    })

    const { data } = await axios.get('/api/tour')

    dispatch({
      type: TOUR_DATES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: TOUR_DATES_FAIL,
      payload: message,
    })
  }
}

export const listTourDateDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOUR_DATE_REQUEST,
    })

    const { data } = await axios.get(`/api/tour/${id}`)

    dispatch({
      type: TOUR_DATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: TOUR_DATE_FAIL,
      payload: message,
    })
  }
}

export const deleteTourDate = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOUR_DATE_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.delete(`/api/tour/${id}`, config)

    dispatch({
      type: TOUR_DATE_DELETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: TOUR_DATE_DELETE_FAIL,
      payload: message,
    })
  }
}

export const updateTourDate = (date) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOUR_DATE_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/tour/${date._id}`, date, config)

    dispatch({
      type: TOUR_DATE_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: TOUR_DATE_UPDATE_FAIL,
      payload: message,
    })
  }
}
