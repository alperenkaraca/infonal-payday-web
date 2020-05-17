import axios from 'axios'
import types from './constants'

const fetchLogin = (loginInfo) => {
  return axios.post(types.LOGIN_REQUEST,loginInfo).then(function(response) {
    return response.data
  })
}

const fetchLogout = (token) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200 })
    }, 1000)
  )
}

const checkAuthentication = (token) => {
  console.log('checkAuthService', token)
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ token })
    }, 1000)
  )
}

const fetchProducts = (token) => {
  return axios.get(types.GET_PRODUCTS,token).then(function(response) {
    return response.data
  })
}

const fetchUserInfo = (token) => {
  return axios.get(types.GET_USER_INFO,token).then(function(response) {
    return response.data
  })
}

const fetchUpdateUserInfo = (data,token) => {
  return axios.post(types.UPDATE_USER_INFO,data,token).then(function(response) {
    return response.data
  })
}

const fetchUpdateProductInfo = (data,token) => {
  return axios.post(types.UPDATE_PRODUCT_INFO,data,token).then(function(response) {
    return response.data
  })
}

export default {
  fetchLogin,
  checkAuthentication,
  fetchLogout,
  fetchProducts,
  fetchUserInfo,
  fetchUpdateUserInfo,
  fetchUpdateProductInfo
}
