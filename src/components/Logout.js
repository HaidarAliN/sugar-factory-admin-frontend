import { Redirect } from 'react-router-dom';


const Logout = () => {
    localStorage.clear();
    window.location.href = '/';
}
 
export default Logout;