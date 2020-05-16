import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'

const routeMap = {
  ProductPage: {
    private: true,
    path: '/product',
    component: ProductPage,
    disableHeader: false,
    disableMenu: false,
  },
  ProfilePage: {
    private: true,
    path: '/profile',
    component: ProfilePage,
    disableHeader: false,
    disableMenu: false,
  },
  login: {
    private: false,
    path: '/login',
    component: LoginPage,
  },
}

export default routeMap
