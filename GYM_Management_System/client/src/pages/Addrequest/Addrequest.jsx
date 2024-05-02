import  { useState } from "react";
import axios from "axios";

function Addrequest() {
    const [EmpId, setEmpId] = useState("");
    const [Type0fEquipment, setTypeofEquipment] = useState("");
    const [Date, setDate] = useState("");
    const [Description, setDescription] = useState("");

    function sendData(e) {
        e.preventDefault();
        
        const newmaintenance = {
            EmpId,
            Type0fEquipment,
            Date,
            Description
        };

        axios.post('http://localhost:3000/maintenance/add', newmaintenance)
            .then(() => {
                alert("Request Added");
                // Clear input fields after successful submission
                setEmpId("");
                setTypeofEquipment("");
                setDate("");
                setDescription("");
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
                            onChange={(e) => setEmpId(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Type0fEquipment">Type of Equipment</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Type0fEquipment"
                            placeholder="Enter Type of Equipment"
                            value={Type0fEquipment}
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
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}

.form-title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-weight: bold;
    margin-bottom: 5px;
}

.form-group input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-control {
    background-color: #a6a8a6;
}

.btn {
    margin-top: 20px;
    margin-left: 2px;
}

.Header1 {
    width: 100%;
}
`;

// Apply styles
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
