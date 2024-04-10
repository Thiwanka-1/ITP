import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Header from '../../Component/Header/Header';

function Displaytask() {
    const [tasks, settasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchtask();
      }, []);
    
      const fetchtask = async () => {
        try {
          const response = await axios.get('http://localhost:8070/maintenance1/');
          settasks(response.data);
        } catch (error) {
          console.error('Error fetching task requests:', error);
        }
      };

    const confirmDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
          await deletetask(id);
        }
      };
    
      const deletetask = async (id) => {
        try {
          await axios.delete(`http://localhost:8070/maintenance1/delete/${id}`);
          alert('Task deleted successfully');
          fetchtask(); // Refresh the list after deletion
        } catch (error) {
          console.error('Error deleting task:', error);
          alert('Error deleting task');
        }
      };

    return (
        <div style={{ position: "relative" }}>
            <Header style={{ position: "fixed", top: 0, width: "100%" }} />
            <div
                style={{
                    backgroundImage: "url('Images/p.jpg')",
                    backgroundSize: "cover",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    
                }}
            >
                <div className="container">
                    <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "60px", marginTop:"-200px" }}>Task Details</h2>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Equipment Name</th>
                                <th>Task Name</th>
                                <th>Description</th>
                                <th>Schedule Date</th>
                                <th>Completion Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(request => (
                                <tr key={request._id}>
                                    <td>{request.equipmentname}</td>
                                    <td>{request.taskname}</td>
                                    <td>{request.description}</td>
                                    <td>{request.scheduledate}</td>
                                    <td>{request.completionstatus}</td>
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

export default Displaytask;
