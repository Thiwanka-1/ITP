import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header1 from '../../componenet/Header1';

function Updatetask() {
  const [taskData, settaskData] = useState({ equipmentname: '', taskname: '', description: '', scheduledate: '',completionstatus: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchtaskDetails();
  }, []);

  const fetchtaskDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8070/maintenance1/${id}`);
      settaskData(response.data);
    } catch (error) {
      console.error('Error fetching task details:', error);
    }
  };

  const handleChange = (e) => {
    settaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8070/maintenance1/update/${id}`, taskData);
      alert('Task updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Error updating task');
    }
  };

  return (
     
    <div style={{backgroundImage:"url('Images/photo3.jpg')",backgroundSize: "cover" , minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header1 style={{ width: "100%" }}/>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Update Task</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Equipment Name :</label>
              <input name="equipmentname" value={taskData.equipmentname} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Task Name:</label>
              <input name="taskname" value={taskData.taskname} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Description:</label>
              <input name="description" type="number" value={taskData.description} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ marginRight: '10px' }}>Schedule Date:</label>
              <textarea name="scheduledate" value={taskData.scheduledate} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ marginRight: '10px' }}> Completion Status:</label>
              <textarea name="completionstatus" value={taskData.completionstatus} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Update Request</button>
              <button type="button" onClick={() => navigate('/')} style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#ccc', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Updatetask;