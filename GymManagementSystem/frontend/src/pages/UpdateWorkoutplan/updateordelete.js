import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [requests, setRequests] = useState([]);
  const [Email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchRequests = async (Email) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8070/workoutplan/trainer/${Email}`);
      setRequests(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching workout plans:', error);
      setError('Error fetching workout plans. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests(Email);
  }, [Email]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Email.trim() !== '') {
      fetchRequests(Email);
    }
  };

  const confirmDelete = async (Email) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      await deleteRequest(Email);
    }
  };

  const deleteRequest = async (Email) => {
    try {
      await axios.delete(`http://localhost:8070/workoutplan/delete/${Email}`);
      alert('Request deleted successfully');
      fetchRequests(Email); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting request:', error);
      alert('Error deleting request');
    }
  };

  return (
    <div >
      <div>
        <div className="container">
          <h2>Request Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Enter Email:
              <input type="email" value={Email} onChange={handleChange} />
            </label>
            <button type="submit">Fetch Requests</button>
          </form>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {!loading && !error && (
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Exercises</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.Email}>
                    <td>{request.Email}</td>
                    <td>{request.Gender}</td>
                    <td>
                      <ul>
                        {request.exercises.map((exercise, index) => (
                          <li key={index}>
                            {exercise.exercise}, Sets: {exercise.sets}, Reps: {exercise.reps}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button onClick={() => navigate(`/update/${request.Email}`)}>Edit</button>
                      <button onClick={() => confirmDelete(request.Email)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Update;
