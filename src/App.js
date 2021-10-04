import Navbar from './components/Navbar';
import Home from './components/Home';
import Picture from './components/Picture';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {

  const [logenin, setLogedin] = useState(null);

  const onchange = (data) => {
    setLogedin("1")
}

  return (
    <Router>
      {console.log(localStorage.getItem('access_token'))}
      <div className="App">
        <Navbar logenin={logenin}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login onchange={onchange}/>
            </Route>
            <Route exact path="/home">
              <Home  />
            </Route>
            <Route exact path="/picture">
              <Picture  />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
