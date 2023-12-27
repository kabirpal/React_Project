import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log('Login Email',email,password);
    setEmail('');
    setPassword('')
  }
  return (
		<>
			<div className="card text-center w-50 mb-3">
			<div className="card-header">
				LogIn
			</div>
			<div className="card-body">
				<form className='form-control' onSubmit={handleSignIn}>
					<h5 className="card-title">Welcome to Feed World</h5>
					<label>Enter your Email:</label>
					<input className='form-control' type='email' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
					<label>Enter password:</label>
					<input className='form-control' type='password' onChange={(e)=>setPassword(e.target.value)} value={password}></input>
					<hr></hr>
					<button type="submit" className='btn btn-primary me-md-2'>Sign-In</button>
					<button type="button" className='btn btn-primary gap-2'><Link to='/Signup' style={{textDecoration: 'none', color:'white'}}>Sign-Up</Link></button>
				</form>
			</div>
			</div>
		</>
  )
}

export default Login;