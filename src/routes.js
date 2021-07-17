import SignUpGoogle from './containers/Auth/SignUpGoogle';
import SignUp from './containers/Auth/SignUp';
import Login from './containers/Auth/Login';
import Home from './containers/Home/index';
import Products from './containers/Products';

const protectedURLs = [
  {
    path: '/',
    exact: true,
    component: Home,
    protected: true
  },
  {
    path: '/products',
    component: Products,
    protected: true
  },
  {
    path: '/',
    exact: true,
    component: Home,
    protected: true
  },
];

const publicURLs = [
  {
    path: '/sign-up',
    exact: true,
    component: SignUp,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/sign-up-google',
    exact: true,
    component: SignUpGoogle,
  }
];

export { publicURLs, protectedURLs };
