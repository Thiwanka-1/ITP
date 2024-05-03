import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  // Initialize state for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cname, setCname] = useState(''); // New field for name
  const [cphone, setCphone] = useState(''); // New field for phone number
  const [height, setHeight] = useState(''); // New field for height
  const [weight, setWeight] = useState(''); // New field for weight
  const [isAdmin, setIsAdmin] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    try {
      // Send a POST request to the server with the user data
      await axios.post('http://localhost:8070/auth/signup', {
        username,
        email,
        password,
        cname,
        cphone,
        height,
        weight,
        isAdmin,
      });
      alert('User created successfully');
    } catch (error) {
      // Detailed error message if available
      alert(error.response?.data?.message || 'An error occurred during sign-up.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
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
      {/* New input fields */}
      <input
        type="text"
        value={cname}
        onChange={(e) => setCname(e.target.value)}
        placeholder="Full Name"
        required
      />
      <input
        type="text"
        value={cphone}
        onChange={(e) => setCphone(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height (in cm)"
        required
      />
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight (in kg)"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
        Register as Admin
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
