import { Form } from './Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/UserSlice';


const LoginForm = () => {
   
		const dispatch = useDispatch();
		const navigate = useNavigate();
	const handleLogin = (email,password) => {
		const auth = getAuth();

		signInWithEmailAndPassword(auth, email, password)
  .then(({user}) => {
	   dispatch(setUser({
			email: user.email,
			token: user.token,
			id: user.id
		}));
      navigate('/')
  })
  .catch(()=> alert('Invalid user'));

	}

   return (
		<Form 
		title = 'login'
		handleClick = {handleLogin}
		/>
	)
}

export {LoginForm}