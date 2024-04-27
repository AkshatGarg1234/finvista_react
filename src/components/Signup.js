import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Perform registration logic (for demonstration, just show alert)
      alert('Registration successful!');
      onClose(); // Close the registration popup
    }
  };

  const handleClose = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    onClose(); // Close the registration popup
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    handleRegister(); // Call handleRegister function to handle registration
  };

  return (
    <div className='parent'>
      <div className="registration-popup">
        <div className="registration-popup-content">
          <span className="close" >&times;</span>
          <h2>Create Account</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className='main'>
              <div className='username'>
                <label htmlFor='regUser'>Username:</label>
                <input
                  id='regUser'
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='email'>
                <label htmlFor='regEmail'>Email:</label>
                <input
                  id='regEmail'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='password'>
                <label htmlFor='regPass'>Password:</label>
                <input
                  id='regPass'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='confirm-password'>
                <label htmlFor='regConfirmPass'>Confirm Password:</label>
                <input
                  id='regConfirmPass'
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className='register'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
