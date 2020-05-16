import axios from 'axios'
import {LOGIN_REQUEST} from './constants'
const fetchLogin = (loginInfo) => {
  return axios.post(LOGIN_REQUEST,loginInfo).then(function(response) {
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

export default {
  fetchLogin,
  checkAuthentication,
  fetchLogout,
}
