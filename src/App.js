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
      <div className="main-content" style={{ paddingLeft: 260 }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
