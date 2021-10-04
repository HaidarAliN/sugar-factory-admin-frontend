
import { Link } from 'react-router-dom';

const Navbar = ({LogedIn}) => {

    return (  
        <nav className="navbar">
            <h1>Admin Side:</h1>
            <div className="links">
            {/* {localStorage.getItem('access_token') && <Link to="/">login</Link>} */}
            {!LogedIn && <Link to="/">login</Link>}
            {LogedIn && <Link to="/home">Approve messages</Link>}
            {LogedIn && <Link to="/picture">Approve pictures</Link>}
            {LogedIn && <Link to="/logout">Logout</Link>}
            </div>
        </nav>
    );
}
 
export default Navbar;