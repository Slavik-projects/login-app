//import logo from './logo.svg';
import './App.css';
import  HomePage  from './components/HomePage';
import  Login  from './components/Login';
import  {RegisterPage}  from './components/RegisterPage';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
		<Routes>
		   <Route exact path='/' element={<HomePage />}/>
		   <Route exact path='/login' element={<Login />}/>
		   <Route exact path='/register' element={<RegisterPage />}/>
	 </Routes>
  );
}

export default App;
