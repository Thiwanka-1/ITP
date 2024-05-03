import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // Include the updated CSS file for styling

const SignUp = () => {
  // State variables for all input fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [cname, setCname] = useState('');
  const [cphone, setCphone] = useState('');
  const [cheight, setHeight] = useState('');
  const [cweight, setWeight] = useState('');
  const [caddress, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // POST request to create a new user
      await axios.post('http://localhost:8070/auth/signup', {
        username,
        email,
        password,
        isAdmin,
        cname,
        cphone,
        cheight,
        cweight,
        caddress,
      });

      alert('User created successfully'); // Success message
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred during signup.'); // Error handling
    }
  };

  return (
    <div className="signup-container" style={{backgroundImage: "url('/Images/sign.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    flex: "1", // Take up remaining space
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center children horizontally
    justifyContent: "center", // Center children vertically
    paddingTop: "50px",
    paddingBottom:"50px"}}>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 style={{color:"black"}}>Create an Account</h2>

        {/* Username */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Customer Details */}
        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Customer Phone</label>
          <input
            type="text"
            value={cphone}
            onChange={(e) => setCphone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Height</label>
          <input
            type="text"
            value={cheight}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Weight</label>
          <input
            type="text"
            value={cweight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={caddress}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Admin Checkbox */}
        <div className="form-group form-group-inline">
        <label>Register as Admin</label> {/* Properly aligned */}
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
