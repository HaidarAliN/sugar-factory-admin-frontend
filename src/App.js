import Navbar from './components/Navbar';
import Home from './components/Home';
import Picture from './components/Picture';
import Login from './components/Login';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {

  const [LogedIn, setLogedin] = useState(null);
  const onchange = () => {
    setLogedin("1")
  }
  useEffect(() => {
    console.log(localStorage.getItem('access_token'));
    if(localStorage.getItem('access_token')){
      setLogedin(localStorage.getItem('access_token'));
    }
  }, []);
    
  return (
    <Router>
      <div className="App">
        <Navbar LogedIn={LogedIn}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login onchange={onchange}/>
            </Route>
            <ProtectedRoute exact path="/home" component={Home} isAuth={LogedIn}/>
            <ProtectedRoute exact path="/picture" component={Picture} isAuth={LogedIn}/>
            <ProtectedRoute exact path="/logout" component={Logout} isAuth={LogedIn}/>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
