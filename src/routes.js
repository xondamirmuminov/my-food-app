import SignUp from './containers/Auth/SignUp';
import Login from './containers/Auth/Login';
import Home from './containers/Home/index';
import Products from './containers/Products';
import Add from './containers/Products/Add';
import Edit from './containers/Products/Edit';
import Shakes from './containers/Shakes';

let id = localStorage.getItem('id')

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
    path: `/products/edit/${id}`,
    exact: true,
    component: Edit,
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

];

export { publicURLs, protectedURLs };
