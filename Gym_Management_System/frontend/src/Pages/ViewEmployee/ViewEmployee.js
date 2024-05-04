import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/emp/')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios.delete(`http://localhost:8070/emp/delete/${id}`)
        .then(() => {
          alert("Employee deleted successfully!");
          setEmployees(employees.filter(emp => emp._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
        });
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["EmpId", "Name", "Age", "Gender", "Height", "Weight", "Address", "Phone", "Email"];
    const tableRows = [];

    employees.forEach(employee => {
      const employeeData = [
        employee.EmpId,
        employee.empName,
        employee.eAge,
        employee.eGender,
        employee.eHeight,
        employee.eWeight,
        employee.eAddress,
        employee.ePhone,
        employee.empEmail,
      ];
      tableRows.push(employeeData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("Employee_Report.pdf");
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '30px' }}>Employee List</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          textAlign: 'left',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <thead>
          <tr style={{ borderBottom: '2px solid black', fontWeight: 'bold', backgroundColor: 'white' , color:"black"}}>
            <th style={{ padding: '12px' }}>EmpId</th>
            <th style={{ padding: '12px' }}>Name</th>
            <th style={{ padding: '12px' }}>Age</th>
            <th style={{ padding: '12px' }}>Gender</th>
            <th style={{ padding: '12px' }}>Height</th>
            <th style={{ padding: '12px' }}>Weight</th>
            <th style={{ padding: '12px' }}>Address</th>
            <th style={{ padding: '12px' }}>Phone</th>
            <th style={{ padding: '12px' }}>Email</th>
            <th style={{ padding: '12px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee._id} style={{ borderBottom: '1px solid #ccc', backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ padding: '10px', color: '#333' }}>{employee.EmpId}</td>
              <td style={{ padding: '10px', color: '#333' }}>{employee.empName}</td>
              <td style={{ padding: '10px', color: '#333' }}>{employee.eAge}</td>
              <td style={{ padding: '10px', color: '#333' }}>{employee.eGender}</td>
              <td style={{ padding: '10px', color: '#333' }}>{employee.eHeight}</td>
              <td style={{ padding: '10px', color: '#333' }}>{employee.eWeight}</td>
              <td style={{ padding: '10px', color: '#333' }}>{employee.eAddress}</td>
              <td style={{ padding: '10px', color: '#333' }}>{employee.ePhone}</td>
              <td style={{ padding: '10px', color: '#333' }}>{employee.empEmail}</td>
              <td style={{ padding: '10px' }}>
                <button
                  onClick={() => window.location.href = `/updateemp/${employee._id}`}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#0E86D4',
                    color: 'black',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => deleteEmployee(employee._id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#0E86D4',
                    color: 'black',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginLeft: '10px',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={generatePDF}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#ffffff',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '20px', // Moved below the table
        }}
      >
        Download PDF Report
      </button>
    </div>
  );
}

export default EmployeeList;
