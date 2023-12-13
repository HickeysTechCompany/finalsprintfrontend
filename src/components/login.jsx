//Login in to get to admin
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace these with your actual username and password
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      setAuthenticated(true);
      setError('');
      navigate('/admin'); // Redirect using useNavigate
    } else {
      setAuthenticated(false);
      setError('Incorrect username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;

