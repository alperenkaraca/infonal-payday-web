import types from '../auth/action-types'
import { notification } from 'antd'

const initialState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  expireTime: undefined,
  loggingIn: false,
  loggingOut: false,
  products: [],
  userInfo: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return {
        ...state,
        loggingIn: true,
      }
    case types.SUCCESS_LOGIN:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: true,
      }
    case types.FAIL_LOGIN:
      notification.error({
        message: 'Login Error',
        description:
          'Username or Password is incorrect.',
      });
      return {
        ...state,
        loggingIn: false,
      }
    case types.LOGOUT:
      return {
        ...state,
        loggingOut: true,
      }
    case types.LOGGED_OUT:
      return {
        state: { ...initialState },
      }
    case types.SUCCESS_GET_PRODUCTS:
      return {
        ...state,
        products: action.data,
      }
    case types.FAIL_GET_PRODUCTS:
      return {
        ...state,
      }
    case types.SUCCESS_GET_USER_INFO:
      return {
        ...state,
        userInfo: action.data,
      }
    case types.FAIL_GET_USER_INFO:
      return {
        ...state,
      }
    case types.SUCCESS_UPDATE_USER_INFO:
      notification.success({
        message: 'User Info',
        description:
          'Update successful.',
      });
      return {
        ...state,
        userInfo: action.data,
      }
    case types.FAIL_UPDATE_USER_INFO:
      notification.error({
        message: 'User Info',
        description:
          'Update fail.',
      });
      return {
        ...state,
      }

      case types.SUCCESS_UPDATE_PRODUCT_INFO:
        notification.success({
          message: 'Product Info',
          description:
            'Update successful.',
        });
        return {
          ...state,
          products: action.data,
        }
      case types.FAIL_UPDATE_PRODUCT_INFO:
        notification.error({
          message: 'Product Info',
          description:
            'Update fail.',
        });
        return {
          ...state,
        }
    default:
      return state
  }
}
