import { Link } from 'react-router-dom'
function LoginPage() {
    return (
        <div>
            <h2>Login Page</h2>
            <Link to="/registeruser">Register</Link>
        </div>
    );
}
export default LoginPage;