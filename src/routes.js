import LoginPage from './pages/LoginPage'
import Profile from './pages/Products'

const routeMap = {
  Profile: {
    private: true,
    path: '/',
    component: Profile,
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
