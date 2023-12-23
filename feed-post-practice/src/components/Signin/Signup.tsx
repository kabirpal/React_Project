import React from 'react'
import {Link} from 'react-router-dom';

export default function Signup() {
  return (
    <>
    <div className="card text-center w-50 mb-3">
      <div className="card-header">
        SignUp
      </div>
      <div className="card-body">
        <h5 className="card-title">SignUp to Login</h5>
        <label>User Name:</label>
        <input className='form-control' type='text' id='name'></input>
        <label>Enter your Email:</label>
        <input className='form-control' type='email' id='email'></input>
        <label>Enter password:</label>
        <input className='form-control' type='password' id='password'></input>
        <hr></hr>
          <button type="button" className='btn btn-primary me-md-2'>Sign-Up</button>
          <button type="button" className='btn btn-primary gap-2'><Link to='/Signin'>Sign-in</Link></button>
      </div>
    </div>
  </>
  )
}
