import SignUp from './containers/Auth/SignUp';
import Login from './containers/Auth/Login';
import Home from './containers/Home';
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
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/sign-up',
    exact: true,
    component: SignUp,
  },
];

export { publicURLs, protectedURLs };
