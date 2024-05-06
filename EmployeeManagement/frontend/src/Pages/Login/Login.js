import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios';
import './Login.css'; // Styling for login page

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:8070/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const userRole = response.data.user.role;
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
    <div className="login-container" style={{backgroundImage: "url('/Images/log.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    flex: "1", // Take up remaining space
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center children horizontally
    justifyContent: "center", // Center children vertically
    paddingTop: "20px",}}>
      <form onSubmit={handleLogin} className="login-form">
        <h2 style={{color:"black"}}>Login</h2>
        <div className="form-group">
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button> {/* Button styling */}
      </form>
    </div>
  );
};

export default Login;
