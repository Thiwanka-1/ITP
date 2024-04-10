import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await axios.get('http://localhost:8070/workoutplan/');
            setRequests(response.data);
        } catch (error) {
            console.error('Error fetching maintenance requests:', error);
            // It's better to handle errors more gracefully, maybe show a message to the user
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
            fetchRequests(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting request:', error);
            alert('Error deleting request');
        }
    };

    return (
        <div>
            <div className="container">
                <h2>Request Details</h2>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {requests.map(request => (
    <tr key={`${request.Email}-${request._id}`}>
        <td>{request.Email}</td>
        <td>{request.Gender}</td>
        <td>
            <button onClick={() => navigate(`/update/${request.Email}`)}>Edit</button>
            <button onClick={() => confirmDelete(request.Email)}>Delete</button>
        </td>
    </tr>
))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Update;
