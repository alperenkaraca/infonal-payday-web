import types from './action-types'

const token = localStorage.getItem('app-token')

export const requestLogin = (username, password) => {
  return {
    type: types.REQUEST_LOGIN,
    username,
    password,
  }
}

export const successLogin = () => {
  return {
    type: types.SUCCESS_LOGIN,
  }
}

export const failLogin = () => {
  return {
    type: types.FAIL_LOGIN,
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT,
    token,
  }
}

export const loggedOut = () => {
  return {
    type: types.LOGGED_OUT,
  }
}

export const authenticated = () => {
  return {
    type: types.AUTHENTICATED,
  }
}

export const checkAuthentication = () => {
  return {
    type: types.CHECK_AUTHENTICATION,
    token,
  }
}

export const getProducts = () => {
  return {
    type: types.GET_PRODUCTS,
  }
}

export const successGetProducts = (data) => {
  return {
    type: types.SUCCESS_GET_PRODUCTS,
    data
  }
}

export const failGetProducts = () => {
  return {
    type: types.FAIL_GET_PRODUCTS,
  }
}

export const getUserInfo = () => {
  return {
    type: types.GET_USER_INFO,
  }
}

export const successGetUserInfo = (data) => {
  return {
    type: types.SUCCESS_GET_USER_INFO,
    data
  }
}

export const failGetUserInfo = () => {
  return {
    type: types.FAIL_GET_USER_INFO,
  }
}

export const updateUserInfo = (data) => {
  return {
    type: types.UPDATE_USER_INFO,
    data
  }
}

export const successUpdateUserInfo = (data) => {
  return {
    type: types.SUCCESS_UPDATE_USER_INFO,
    data
  }
}

export const failUpdateUserInfo = () => {
  return {
    type: types.FAIL_UPDATE_USER_INFO,
  }
}