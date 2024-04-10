import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header1 from '../../componenet/Header1';
import {useNavigate} from 'react-router-dom';

function Displayrequest() {
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchrequest();
      }, []);
    
      const fetchrequest = async () => {
        try {
          const response = await axios.get('http://localhost:8070/maintenance/');
          setRequests(response.data);
        } catch (error) {
          console.error('Error fetching maintenance requests:', error);
        }
      };

    const confirmDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this request?')) {
          await deleterequest(id);
        }
      };
    
      const deleterequest = async (id) => {
        try {
          await axios.delete(`http://localhost:8070/maintenance/delete/${id}`);
          alert('Request deleted successfully');
          fetchrequest(); // Refresh the list after deletion
        } catch (error) {
          console.error('Error deleting request:', error);
          alert('Error deleting request');
        }
      };

    return (
        <div style={{ position: "relative" }}>
            <Header1 style={{ position: "fixed", top: 0, width: "100%" }} />
            <div
                style={{
                    backgroundImage: "url('Images/photo.jpg')",
                    backgroundSize: "cover",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    
                }}
            >
                <div className="container">
                    <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "60px", marginTop:"-200px" }}>Request Details</h2>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Employee ID</th>
                                <th>Type of Equipment</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(request => (
                                <tr key={request._id}>
                                    <td>{request.EmpId}</td>
                                    <td>{request.Type0fEquipment}</td>
                                    <td>{request.Date}</td>
                                    <td>{request.Description}</td>
                                    <td>
                                         <button onClick={() => navigate(`/update/${request._id}`)}>Edit</button>
                                         <button onClick={() => confirmDelete(request._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Displayrequest;
