import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` in React Router v6
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use `useNavigate`

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('http://localhost:8070/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const userRole = response.data.user.role; // Determine the user's role
        if (userRole === 'admin') {
          navigate('/dash'); // Redirect to admin dashboard
        } else {
          navigate('/user'); // Redirect to user dashboard
        }
      }
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
