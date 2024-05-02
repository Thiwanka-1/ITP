import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DisplayAppointment() {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:8070/appointment/');
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const confirmDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
            await deleteAppointment(id);
        }
    };

    const deleteAppointment = async (id) => {
        try {
            await axios.delete(`http://localhost:8070/appointment/delete/${id}`);
            alert('Appointment deleted successfully');
            fetchAppointments(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting appointment:', error);
            alert('Error deleting appointment');
        }
    };

    const handleUpdate = (id) => {
        // Logic to handle update action
        alert(`Update appointment with ID: ${id}`);
    };

    const styles = {
        table: {
            width: "100%",
            borderCollapse: "collapse"
        },
        th: {
            backgroundColor: "#343a40",
            color: "#fff",
            padding: "10px"
        },
        td: {
            border: "1px solid #ddd",
            padding: "10px"
        },
        button: {
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            marginRight: "5px"
        },
        deleteButton: {
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer"
        }
    };

    return (
        <div className='container'> 
            <h2>Appointment Details</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>DoctorName</th>
                        <th style={styles.th}>Age</th>
                        <th style={styles.th}>Gender</th>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Time</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment._id}>
                            <td style={styles.td}>{appointment.name}</td>
                            <td style={styles.td}>{appointment.DoctorName}</td>
                            <td style={styles.td}>{appointment.age}</td>
                            <td style={styles.td}>{appointment.gender}</td>
                            <td style={styles.td}>{appointment.date}</td>
                            <td style={styles.td}>{appointment.time}</td>
                            <td style={styles.td}>
                            <button style={styles.deleteButton} onClick={() => navigate(`/updateapoint/${appointment._id}`)}>Edit</button>
                                <button style={styles.deleteButton} onClick={() => confirmDelete(appointment._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayAppointment;
