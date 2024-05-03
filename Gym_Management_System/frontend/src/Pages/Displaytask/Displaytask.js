import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';

function Displaytask() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8070/maintenance1/');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching task requests:', error);
        }
    };

    const confirmDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            await deleteTask(id);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:8070/maintenance1/delete/${id}`);
            alert('Task deleted successfully');
            fetchTasks(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting task:', error);
            alert('Error deleting task');
        }
    };

    const downloadReport = () => {
        const doc = new jsPDF();
        doc.text('Task Report', 14, 22);
        autoTable(doc, {
            head: [['Equipment Name', 'Task Name', 'Description', 'Schedule Date', 'Completion Status']],
            body: tasks.map(task => [task.equipmentname, task.taskname, task.description, task.scheduledate, task.completionstatus]),
            theme: 'striped',
            styles: { fontSize: 8 },
            headStyles: { fillColor: [22, 160, 133] },
        });
        doc.save('task_report.pdf');
    };

    return (
        <div style={{ backgroundImage: "url('Images/p.jpg')", backgroundSize: "cover", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2 style={{ textAlign: "center", margin: "20px 0" , color: "white"}}>Task List</h2>
                <table style={{ width: "70%", border: "1px solid white", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#007bff", color: "white" }}>
                            <th style={tableHeaderStyle}>Equipment Name</th>
                            <th style={tableHeaderStyle}>Task Name</th>
                            <th style={tableHeaderStyle}>Description</th>
                            <th style={tableHeaderStyle}>Schedule Date</th>
                            <th style={tableHeaderStyle}>Completion Status</th>
                            <th style={tableHeaderStyle}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task._id} style={{color:"black"}}>
                                <td style={tableCellStyle}>{task.equipmentname}</td>
                                <td style={tableCellStyle}>{task.taskname}</td>
                                <td style={tableCellStyle}>{task.description}</td>
                                <td style={tableCellStyle}>{task.scheduledate}</td>
                                <td style={tableCellStyle}>{task.completionstatus}</td>
                                <td style={tableCellStyle}>
                                    <button style={actionButtonStyle} onClick={() => navigate(`/updatetsk/${task._id}`)}>Edit</button>
                                    <button style={actionButtonStyle} onClick={() => confirmDelete(task._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={downloadReport} style={{ marginTop: '20px', backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', alignSelf: 'center' }}>
                    Download Report
                </button>
            </div>
        </div>
    );
}

// Styles
const tableHeaderStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
};

const actionButtonStyle = {
    marginRight: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

export default Displaytask;
