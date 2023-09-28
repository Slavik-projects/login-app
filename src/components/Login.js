import { LoginForm } from "../additional/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
return(
	<div className="Left">
	<h1>Login</h1>
	<LoginForm />
	<p>Or</p>
		<Link to="/register">register</Link>
</div>
)
}

export default Login