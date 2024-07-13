// src/components/Register.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-e-commerce-production.up.railway.app/api/v1/users/register', {
        username,
        password,
        email
      });
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('User with this username or email already exists.');
      } else {
        setError('Registration failed. Please try again later.');
      }
      console.error('Error response:', error.response);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
