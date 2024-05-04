import { useState, useEffect } from 'react';
import axios from 'axios';

function AddRequest() {
    const [EmpId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [Type0fEquipment, setTypeofEquipment] = useState("");
    const [Date, setDate] = useState("");
    const [Description, setDescription] = useState("");

    const fetchEmployeeName = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8070/emp/get/${id}`);
            setEmpName(response.data.empName);
        } catch (error) {
            setEmpName('');
            alert("Failed to fetch employee name");
        }
    };

    useEffect(() => {
        if (EmpId) {
            fetchEmployeeName(EmpId);
        }
    }, [EmpId]);

    const sendData = async (e) => {
        e.preventDefault();
        
        const newmaintenance = {
            EmpId,
            Type0fEquipment,
            Date,
            Description
        };

        try {
            await axios.post('http://localhost:8070/maintenance/add', newmaintenance);
            alert("Request Added");
            // Clear input fields after successful submission
            setEmpId("");
            setEmpName("");
            setTypeofEquipment("");
            setDate("");
            setDescription("");
        } catch (error) {
            alert("Error adding request: " + error.message);
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundImage: "url('Images/fff.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '550px',
                margin: 'auto',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginTop: '50px'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    color: '#333',
                    fontSize: '30px'
                }}>Maintenance Request</h2>
                <form onSubmit={sendData}>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="EmployeeId" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Employee ID</label>
                        <input
                            type="text"
                            style={{
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%'
                            }}
                            id="EmployeeId"
                            placeholder="Enter Employee ID"
                            value={EmpId}
                            onChange={(e) => setEmpId(e.target.value)}
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="EmployeeName" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Employee Name</label>
                        <input
                            type="text"
                            style={{
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%'
                            }}
                            id="EmployeeName"
                            placeholder="Employee Name"
                            value={empName}
                            readOnly
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="Type0fEquipment" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Type of Equipment</label>
                        <input
                            type="text"
                            style={{
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%'
                            }}
                            id="Type0fEquipment"
                            placeholder="Enter Type of Equipment"
                            value={Type0fEquipment}
                            onChange={(e) => setTypeofEquipment(e.target.value)}
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="Date" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Date</label>
                        <input
                            type="date"
                            style={{
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%'
                            }}
                            id="Date"
                            value={Date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="Description" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Description</label>
                        <input
                            type="text"
                            style={{
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%'
                            }}
                            id="Description"
                            placeholder="Enter Description"
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button
                            type="submit"
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                color: 'white',
                                borderRadius: '10px',
                                fontSize: '20px',
                                background: 'black',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddRequest;
