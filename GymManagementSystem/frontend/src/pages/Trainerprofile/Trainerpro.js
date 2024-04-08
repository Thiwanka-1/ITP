// TrainerProfileForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './TrainerProfileForm.css'; // Import the CSS file

function TrainerProfileForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Gender: '',
    PhoneNumber: '',
    Address: '',
    ProfilePhoto: null,
    CertificatePhoto: null,
    Categories: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      await axios.post('http://localhost:8070/trainerprofile/add', formDataToSend);
      alert('Trainer profile added successfully');
      // Reset form fields after successful submission
      setFormData({
        Name: '',
        Email: '',
        Gender: '',
        PhoneNumber: '',
        Address: '',
        ProfilePhoto: null,
        CertificatePhoto: null,
        Categories: ''
      });
    } catch (error) {
      alert('Error adding trainer profile');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h1>Add Trainer Profile</h1>
      <form onSubmit={handleSubmit}>
      <div className='one'>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="Gender" value={formData.Gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="Address" value={formData.Address} onChange={handleChange} />
        </div></div>
        <div className='two'>
        <div className="form-group">
          <label>Profile Photo:</label>
          <input type="file" name="ProfilePhoto" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Certificate Photo:</label>
          <input type="file" name="CertificatePhoto" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Categories:</label>
          <input type="text" name="Categories" value={formData.Categories} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit">Add Trainer Profile</button>
        </div></div>
      </form>
    </div>
  );
}

export default TrainerProfileForm;
