import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from './userProPackage.jpg'


function Updaterequest() {
  const [requestData, setrequestData] = useState({  EmpId: '', Type0fEquipment: '', Date: '', Description: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchrequestDetails();
  }, []);

  const fetchrequestDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8070/maintenance/get/${id}`);
      setrequestData(response.data);
    } catch (error) {
      console.error('Error fetching request details:', error);
    }
  };

  const handleChange = (e) => {
    setrequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8070/maintenance/update/${id}`, requestData);
      alert('Request updated successfully');
      navigate('/viewreq');
    } catch (error) {
      console.error('Error updating request:', error);
      alert('Error updating request');
    }
  };

  return (
     
    <div style={{backgroundImage:`url(${backgroundImage})`,backgroundSize: "cover" , minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px',color: 'white' }}>Update Request</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px',color: 'white' }}>Employee Id :</label>
              <input name="EmpId" value={requestData.EmpId} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required/>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px',color: 'white' }}>Type of Equipment:</label>
              <input name="Type0fEquipment" value={requestData.Type0fEquipment} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required/>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' ,color: 'white'}}>Date:</label>
              <input name="Date" type="date" value={requestData.Date} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required/>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ marginRight: '10px',color: 'white' }}>Description:</label>
              <textarea name="Description" value={requestData.Description} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Update Request</button>
              <button type="button" onClick={() => navigate('/viewreq')} style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#ccc', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Updaterequest;