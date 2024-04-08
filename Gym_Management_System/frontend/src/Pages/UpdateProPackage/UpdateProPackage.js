import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Component/Header/Header';

function UpdateProPackage() {
  const [proPackageData, setproPackageData] = useState({ proPackageName: '', proPrice: '', proDuration: '', reason: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/proPackage/${id}`);
        setproPackageData(response.data);
      } catch (error) {
        console.error('Error fetching package details:', error);
      }
    };
  
    fetchPackageDetails();
  }, [id]);

  const handleChange = (e) => {
    setproPackageData({ ...proPackageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8070/proPackage/update/${id}`, proPackageData);
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
              <input name="proPackageName" value={proPackageData.proPackageName} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Price:</label>
              <input name="proPrice" type="number" value={proPackageData.proPrice} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Duration:</label>
              <input name="proDuration"  value={proPackageData.proDuration} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ marginRight: '10px' }}>Reason:</label>
              <textarea name="reason" value={proPackageData.reason} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
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

export default UpdateProPackage;
