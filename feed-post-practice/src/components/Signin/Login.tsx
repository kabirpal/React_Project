import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
      <>
        <div className="card text-center w-50 mb-3">
          <div className="card-header">
            LogIn
          </div>
          <div className="card-body">
            <h5 className="card-title">SignIn to Post</h5>
            <label>Enter your Email:</label>
            <input className='form-control' type='email'></input>
            <label>Enter password:</label>
            <input className='form-control' type='password'></input>
            <hr></hr>
              <button type="button" className='btn btn-primary me-md-2'>Sign-In</button>
              <button type="button" className='btn btn-primary gap-2'><Link to='/Signup'>Sign-Up</Link></button>
          </div>
        </div>
      </>
  )
}

export default Login;