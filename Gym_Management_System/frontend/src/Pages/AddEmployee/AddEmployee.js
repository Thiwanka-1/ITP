import { useState } from 'react';
import axios from 'axios';

function AddEmployee() {
    // Define state for all required fields
    const [EmpId, setEmpId] = useState('');
    const [empName, setEmpName] = useState('');
    const [eAge, setEage] = useState('');
    const [eGender, setEgender] = useState('');
    const [eHeight, setEheight] = useState('');
    const [eWeight, setEweight] = useState('');
    const [eAddress, setEaddress] = useState('');
    const [ePhone, setEphone] = useState('');
    const [empEmail, setEmail] = useState('');

    // Handle form submission to add a new employee
    const addEmployee = async (e) => {
        e.preventDefault();

        const newEmployee = {
            EmpId,
            empName,
            eAge,
            eGender,
            eHeight,
            eWeight,
            eAddress,
            ePhone,
            empEmail
        };

        try {
            await axios.post('http://localhost:8070/emp/add', newEmployee);
            alert("Employee added successfully!");
            // Clear form fields after successful submission
            setEmpId('');
            setEmpName('');
            setEage('');
            setEgender('');
            setEheight('');
            setEweight('');
            setEaddress('');
            setEphone('');
            setEmail('');
        } catch (error) {
            alert("Error adding employee: " + error.message);
        }
    };

    return (
        <div style={{
                    backgroundImage: "url('Images/tgd.jpg')",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000",
                    backgroundSize: "cover",
                    padding:"50px"
        }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color:"white" }}>Register Employee</h2>
            <form onSubmit={addEmployee} style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
            }}>
                {/* Employee ID */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="empId" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee ID:</label>
                    <input
                        type="text"
                        id="empId"
                        value={EmpId}
                        onChange={(e) => setEmpId(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    />
                </div>
                {/* Employee Name */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="empName" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee Name:</label>
                    <input
                        type="text"
                        id="empName"
                        value={empName}
                        onChange={(e) => setEmpName(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    />
                </div>
                {/* Employee Age */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="eAge" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee Age:</label>
                    <input
                        type="number"
                        id="eAge"
                        value={eAge}
                        onChange={(e) => setEage(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    />
                </div>
                {/* Employee Gender */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="eGender" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee Gender:</label>
                    <select
                        id="eGender"
                        value={eGender}
                        onChange={(e) => setEgender(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {/* Employee Height */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="eHeight" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee Height (cm):</label>
                    <input
                        type="number"
                        id="eHeight"
                        value={eHeight}
                        onChange={(e) => setEheight(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    />
                </div>
                {/* Employee Weight */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="eWeight" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee Weight (kg):</label>
                    <input
                        type="number"
                        id="eWeight"
                        value={eWeight}
                        onChange={(e) => setEweight(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    />
                </div>
                {/* Employee Address */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="eAddress" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee Address:</label>
                    <input
                        type="text"
                        id="eAddress"
                        value={eAddress}
                        onChange={(e) => setEaddress(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    />
                </div>
                {/* Employee Phone */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="ePhone" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee Phone:</label>
                    <input
                        type="text"
                        id="ePhone"
                        value={ePhone}
                        onChange={(e) => setEphone(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    />
                </div>
                {/* Employee Email */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="empEmail" style={{ fontWeight: 'bold', color: '#ffffff' }}>Employee Email:</label>
                    <input
                        type="email"
                        id="empEmail"
                        value={empEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            backgroundColor: '#ffffff'
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#4CAF50',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textAlign: 'center'
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default AddEmployee;
