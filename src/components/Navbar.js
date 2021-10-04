
import { Link } from 'react-router-dom';

const Navbar = ({logenin}) => {

    return (  
        <nav className="navbar">
            <h1>The admin side</h1>
            <div className="links">
            {/* {localStorage.getItem('access_token') && <Link to="/">login</Link>} */}
            {!logenin && <Link to="/">login</Link>}
            {logenin && <Link to="/home">Approve messages</Link>}
            {logenin && <Link to="/picture">Approve pictures</Link>}
            </div>
        </nav>
    );
}
 
export default Navbar;