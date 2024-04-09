// TrainerProfileForm.js

import React, { useState } from 'react';
import axios from 'axios';

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
            await axios.post('http://localhost:8070/trainerpro/add', formDataToSend);
            alert('Trainer profile added successfully');
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
        <div>
            <h1>Add Trainer Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="Gender" value={formData.Gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="Address" value={formData.Address} onChange={handleChange} />
                </div>
                <div>
                    <label>Profile Photo:</label>
                    <input type="file" name="ProfilePhoto" onChange={handleFileChange} />
                </div>
                <div>
                    <label>Certificate Photo:</label>
                    <input type="file" name="CertificatePhoto" onChange={handleFileChange} />
                </div>
                <div>
                    <label>Categories:</label>
                    <input type="text" name="Categories" value={formData.Categories} onChange={handleChange} />
                </div>
                <button type="submit">Add Trainer Profile</button>
            </form>
        </div>
    );
}

export default TrainerProfileForm;
