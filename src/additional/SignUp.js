import Login from "../components/Login";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/UserSlice";


const SignUp = () => {
   
		const navigate = useNavigate();
		const dispatch = useDispatch();
	const handleRegister = (email,password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
  .then(({user}) => {
	dispatch(setUser({
		email: user.email,
		token: user.token,
		id: user.id
	}));
	navigate('/')
  })
  .catch(console.error);
	}

   return(
		<Form title = 'register'
      handleClick = {handleRegister}
		/>
	)
}

export {SignUp}