import './App.css';
import Login from './components/login';
import Users from './components/login/users';
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/dashboard/users">
            <Users />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
