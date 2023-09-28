import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/UserSlice';


const HomePage = () => {
	const navigate = useNavigate();
	const {isAuth,email} = useAuth();
	const dispatch = useDispatch();

	useEffect(() => {
      if(!isAuth){
         navigate('/login')
		}
	},[isAuth])

	return (
		<div className='Left'>
	<h1>Welcome</h1>
	<button onClick={()=>dispatch(removeUser())}>
		Log out from {email}
	</button>
</div>
	)
}

export default HomePage