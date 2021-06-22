import Home from './containers/Home';
import Login from './containers/Auth/Login';
import SignUp from './containers/Auth/SignUp';
import Header from './containers/Sidebar/Header';
import PageNotFound from './components/NotFoundPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
