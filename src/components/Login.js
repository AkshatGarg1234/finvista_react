import React, { useState } from 'react';
import './Login.css'
const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'demo' && password === 'password') {
      alert('Login successful!');
      onClose(false); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='parent'>
    <div className="login-popup">
      <div className="login-popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Exsiting User? Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='username'>
          <label for='user'>Username:</label>
          <input
          id='user'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='password'>
          <label for='pass'> Password : </label>
          <input id='pass'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className='login'>Login</button>
      </div>
    </div>
    </div>
  );
};

export default Login;
