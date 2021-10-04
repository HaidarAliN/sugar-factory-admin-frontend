import { useState } from "react";
import axios from "axios";
import BASE_API_URL from '../services/BaseUrl';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleChange = event => {
        props.onchange(event);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            email: email,
            password: password
        };
        try {
            const resp = await axios.post(`${BASE_API_URL}/api/login`, newPost);
            console.log(resp.data);
            setError(null);
            handleChange();
            localStorage.setItem('access_token', JSON.stringify( resp.data['access_token']));
            history.push('/home');
        } catch (err) {
            console.error(err);
            setError('qwe');
        }
    }

    return ( 
        <div className="login">
            { error && <h4>Login failed wrong user credentials</h4> }
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                type="text" 
                required 
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input 
                type="password" 
                required 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
        </div>
     );
}
 
export default Login;