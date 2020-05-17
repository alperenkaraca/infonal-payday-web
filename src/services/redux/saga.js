import { call, put, takeLatest } from 'redux-saga/effects'
import types from './action-types'
import { successLogin, failLogin, loggedOut, successGetProducts, successGetUserInfo, failGetProducts, failGetUserInfo, failUpdateUserInfo, successUpdateUserInfo, successUpdateProductInfo } from './actions'
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
    yield call(API.fetchLogout, token)
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

function* getProducts() {
  try {
    const token = localStorage.getItem('accessToken')
    const request = {
      headers: {
        Authorization: token
      }
    }
    const data = yield call(API.fetchProducts, request);
    yield put(successGetProducts(data))
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failGetProducts(error))
  }
}

function* getUserInfo() {
  try {
    const token = localStorage.getItem('accessToken')
    const request = {
      headers: {
        Authorization: token
      }
    }
    const data = yield call(API.fetchUserInfo, request);
    yield put(successGetUserInfo(data))
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failGetUserInfo(error))
  }
}

function* postUserInfo(action) {
  try {
    const token = localStorage.getItem('accessToken');
    const { data } = action;
    const requestHeaders = {
      headers: {
        Authorization: token
      }
    }
    const response = yield call(API.fetchUpdateUserInfo, data, requestHeaders);
    yield put(successUpdateUserInfo(response))
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failUpdateUserInfo(error))
  }
}

function* postProductInfo(action) {
  try {
    const token = localStorage.getItem('accessToken');
    const { data } = action;
    const requestHeaders = {
      headers: {
        Authorization: token
      }
    }
    const response = yield call(API.fetchUpdateProductInfo, data, requestHeaders);
    yield put(successUpdateProductInfo(response))
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failUpdateUserInfo(error))
  }
}


export default function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, requestLogin)
  yield takeLatest(types.CHECK_AUTHENTICATION, checkAuthentication)
  yield takeLatest(types.LOGOUT, logout)
  yield takeLatest(types.GET_PRODUCTS, getProducts)
  yield takeLatest(types.GET_USER_INFO, getUserInfo)
  yield takeLatest(types.UPDATE_USER_INFO, postUserInfo)
  yield takeLatest(types.UPDATE_PRODUCT_INFO, postProductInfo)
}
