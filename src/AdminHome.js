import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/loginn">
              <Login />
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default AdminHome;
