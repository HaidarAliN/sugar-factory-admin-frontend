import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


const NotFound = () => {

    const [logedIn, setLogedin] = useState(null);

    useEffect(() => {
      console.log(localStorage.getItem('access_token'));
      if(localStorage.getItem('access_token')){
        setLogedin(localStorage.getItem('access_token'));
      }
    }, []);

    return ( 
        <div className="not-found">
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        { logedIn && <Link to="/home">Back to the homepage...</Link>}
        { !logedIn && <Link to="/">Back to the homepage...</Link>}
    </div>
     );
}
 
export default NotFound;