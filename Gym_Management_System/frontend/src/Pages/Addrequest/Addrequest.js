import React, { useState } from "react";
import axios from "axios";

function Addrequest() {
    const [EmpId, setEmpId] = useState("");
    const [TypeofEquipment, setTypeofEquipment] = useState("");
    const [Date, setDate] = useState("");
    const [Description, setDescription] = useState("");
    const [empname, setEmpName] = useState(""); // New state variable for employee name

    // Function to fetch employee name
    const fetchEmployeeName = (id) => {
        axios.get(`http://localhost:8070/Employee/get/${id}`)
            .then((response) => {
                setEmpName(response.data.name);
            })
            .catch((err) => {
                console.error("Error fetching employee name:", err);
                setEmpName(""); // Clear employee name if error occurs
            });
    };

    function sendData(e) {
        e.preventDefault();
        
        const newMaintenance = {
            EmpId,
            TypeofEquipment,
            Date,
            Description
        };

        axios.post('http://localhost:8070/maintenance/add', newMaintenance)
            .then(() => {
                alert("Request Added");
                // Clear input fields after successful submission
                setEmpId("");
                setTypeofEquipment("");
                setDate("");
                setDescription("");
                setEmpName(""); // Clear employee name after submission
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="main-container">
            <div className="form-container">
                <h2 className="form-title">Maintain Request</h2>
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label htmlFor="EmployeeId">Employee ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="EmployeeId"
                            placeholder="Enter Employee ID"
                            value={EmpId}
                            onChange={(e) => {
                                setEmpId(e.target.value);
                                fetchEmployeeName(e.target.value); // Fetch employee name when ID is entered
                            }}
                        />
                    </div>
                    
                    {/* Display employee name */}
                    {empname && (
                        <div className="form-group">
                            <label>Employee Name</label>
                            <p>{empname}</p>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="TypeofEquipment">Type of Equipment</label>
                        <input
                            type="text"
                            className="form-control"
                            id="TypeofEquipment"
                            placeholder="Enter Type of Equipment"
                            value={TypefEquipment}
                            onChange={(e) => setTypeofEquipment(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Date">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="Date"
                            value={Date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Description"
                            placeholder="Enter Description"
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-dark btn-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addrequest;

// CSS Styles
const styles = `
.main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: url('Images/background.jpg');
    background-size: cover;
}

.form-container {
    width: 100%;
    max-width: 550px;
    margin: auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* Box shadow for a card-like effect */
}

.form-title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
    background-color: #a6a8a6; /* Set light grey background color */
}

.btn {
    margin-top: 20px;
    margin-left: 205px;
}

/* Ensure Header spans the full width */
.Header1 {
    width: 100%;
}
`;

// Apply styles
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
