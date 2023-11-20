import { useState } from 'react';
import Logo from '../../images/Logo.svg';
import './SignUp.scss';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='landing-page'>
      <div className='landing-bar'>
        <img src={Logo} alt='Remote Food App' />
      </div>
      <div className='signup'>
        <div className='signup-form'>
          <div className='title'>Sign up</div>
          <input
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Create account</button>
          <div className='footer'>
            Already have an account? <b>Sign in</b>
          </div>
        </div>
      </div>
    </div>
  );
}
