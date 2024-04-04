import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Component/Header/Header';

function UpdatePackage() {
  const [packageData, setPackageData] = useState({ packageName: '', duration: '', price: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPackageDetails();
  });

  const fetchPackageDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8070/package/${id}`);
      setPackageData(response.data);
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  const handleChange = (e) => {
    setPackageData({ ...packageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8070/package/update/${id}`, packageData);
      alert('Package updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating package:', error);
      alert('Error updating package');
    }
  };

  return (
    <div style={{backgroundImage:"url('Images/AddPackage.png')",backgroundSize: "cover" , minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header style={{ width: "100%" }}/>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Update Package</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Package Name:</label>
              <input name="packageName" value={packageData.packageName} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Duration:</label>
              <input name="duration" value={packageData.duration} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Price:</label>
              <input name="price" type="number" value={packageData.price} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ marginRight: '10px' }}>Description:</label>
              <textarea name="description" value={packageData.description} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Update Package</button>
              <button type="button" onClick={() => navigate('/')} style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#ccc', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePackage;
