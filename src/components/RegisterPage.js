import { Link } from "react-router-dom";
import { SignUp } from "../additional/SignUp";
const RegisterPage = () => {
   return (
		<div className="Left">
			<h1>Registration</h1>
			<SignUp />
			<h3>Already have an account?</h3>
			<Link to="/login">Log in to account</Link>
		</div>
	)
}

export {RegisterPage}