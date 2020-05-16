import { call, put, takeLatest } from 'redux-saga/effects'
import types from './action-types'
import { successLogin, failLogin, loggedOut } from './actions'
import API from './api'

const setTokenToLocalStorage = (accessToken, tokenType) => {
  localStorage.setItem('accessToken', `${tokenType} ${accessToken}`)
}

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('accessToken')
}

function* requestLogin({ username, password }) {
  try {
    const loginInfo = {
      username, 
      password
    }
    const { accessToken, tokenType } = yield call(API.fetchLogin, loginInfo)
    yield put(successLogin())
    yield setTokenToLocalStorage(accessToken, tokenType)
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failLogin(error))
  }
}

function* logout({ token }) {
  try {
    const { status } = yield call(API.fetchLogout, token)
    yield put(loggedOut())
    removeTokenFromLocalStorage()
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failLogin(error))
  }
}

function* checkAuthentication({ token }) {
  try {
    const response = yield call(API.checkAuthentication, token)
    //Other sideeffects here
    console.log('Still Authenticated until: ', response.expireTime)
  } catch (error) {
    removeTokenFromLocalStorage()
    console.error('ERROR:', error)
  }
}

export default function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, requestLogin)
  yield takeLatest(types.CHECK_AUTHENTICATION, checkAuthentication)
  yield takeLatest(types.LOGOUT, logout)
}