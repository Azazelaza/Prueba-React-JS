import './App.css';
import Login from './components/login';
import Users from './components/users';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
