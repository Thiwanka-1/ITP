import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    EmpId: '',
    empName: '',
    eAge: '',
    eGender: '',
    eHeight: '',
    eWeight: '',
    eAddress: '',
    ePhone: '',
    empEmail: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8070/emp/get/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
      });
  }, [id]);

  const updateEmployee = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8070/emp/update/${id}`, employee);
      alert("Employee updated successfully!");
      navigate('/viewemp');
    } catch (error) {
      alert("Error updating employee: " + error.message);
    }
  };

  return (
    <div style={{
      backgroundImage: "url('/Images/your-background-image.jpg')",
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: '#ffffff' }}>Update Employee</h2>
      <form onSubmit={updateEmployee} style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
      }}>
        {/* Employee ID */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Employee ID</label>
          <input
            type="text"
            value={employee.EmpId}
            onChange={(e) => setEmployee({ ...employee, EmpId: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
            }}
            placeholder="Enter Employee ID"
          />
        </div>

        {/* Employee Name */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Employee Name</label>
          <input
            type="text"
            value={employee.empName}
            onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
            }}
            placeholder="Enter Employee Name"
          />
        </div>

        {/* Employee Age */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Age</label>
          <input
            type="number"
            value={employee.eAge}
            onChange={(e) => setEmployee({ ...employee, eAge: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
            }}
            placeholder="Enter Age"
          />
        </div>

        {/* Employee Gender */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Gender</label>
          <select
            value={employee.eGender}
            onChange={(e) => setEmployee({ ...employee, eGender: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
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
          <label style={{ fontWeight: 'bold', color: '#333' }}>Height (cm)</label>
          <input
            type="number"
            value={employee.eHeight}
            onChange={(e) => setEmployee({ ...employee, eHeight: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
            }}
            placeholder="Enter Height in cm"
          />
        </div>

        {/* Employee Weight */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Weight (kg)</label>
          <input
            type="number"
            value={employee.eWeight}
            onChange={(e) => setEmployee({ ...employee, eWeight: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
            }}
            placeholder="Enter Weight in kg"
          />
        </div>

        {/* Employee Address */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Address</label>
          <input
            type="text"
            value={employee.eAddress}
            onChange={(e) => setEmployee({ ...employee, eAddress: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
            }}
            placeholder="Enter Address"
          />
        </div>

        {/* Employee Phone */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Phone Number</label>
          <input
            type="text"
            value={employee.ePhone}
            onChange={(e) => setEmployee({ ...employee, ePhone: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
            }}
            placeholder="Enter Phone Number"
          />
        </div>

        {/* Employee Email */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Email Address</label>
          <input
            type="email"
            value={employee.empEmail}
            onChange={(e) => setEmployee({ ...employee, empEmail: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '100%',
            }}
            placeholder="Enter Email Address"
          />
        </div>

        {/* Buttons */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#ffffff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => navigate('/viewemp')}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#6c757d',
              color: '#ffffff',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateEmployee;
