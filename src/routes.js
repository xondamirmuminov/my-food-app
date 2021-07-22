import SignUpGoogle from './containers/Auth/SignUpGoogle';
import SignUp from './containers/Auth/SignUp';
import Login from './containers/Auth/Login';
import Home from './containers/Home/index';
import Products from './containers/Products';
import Add from './containers/Products/Add';
import Shakes from './containers/Shakes';

const protectedURLs = [
  {
    path: '/',
    exact: true,
    component: Home,
    protected: true
  },
  {
    path: '/products',
    exact: true,
    component: Products,
    protected: true
  },
  {
    path: '/products/new',
    exact: true,
    component: Add,
    protected: true
  },
  {
    path: '/shakes',
    exact: true,
    component: Shakes,
    protected: true
  }
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
