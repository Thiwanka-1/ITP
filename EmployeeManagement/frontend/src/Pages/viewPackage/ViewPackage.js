import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function ViewPackage() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:8070/package');
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  const confirmDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      await deletePackage(id);
    }
  };

  const deletePackage = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/package/delete/${id}`);
      alert('Package deleted successfully');
      fetchPackages(); 
    } catch (error) {
      console.error('Error deleting package:', error);
      alert('Error deleting package');
    }
  };

  const downloadReport = () => {
    const doc = new jsPDF();
  
    const logoURL = 'Images/Gymflex_Logo_1.jpg'; 
  
    doc.addImage(logoURL, 'PNG', 20, 20, 20, 20); 
    doc.text('Packages Report', 60, 22); 
  
    doc.autoTable({
      startY: 40, 
      theme: 'striped',
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 50 }, 2: { cellWidth: 40 }, 3: { cellWidth: 30 }, 4: { cellWidth: 'auto' } },
      head: [['Type', 'Name', 'Duration', 'Price', 'Description']],
      body: packages.map(pkg => [pkg.packageType, pkg.packageName, pkg.duration, `Rs.${pkg.price}`, pkg.description]),
    });
  
    doc.save('packages_report.pdf');
  };

  return (
    <div style={{ backgroundImage:"url('Images/PackageList.jpg')", backgroundSize: "cover", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h2 style={{ textAlign: "center", margin: "20px 0" , color: "white"}}>Package List</h2>
        <table style={{ width: "70%", border: "1px solid white", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "white" }}>
              <th style={tableHeaderStyle}>Package Type</th>
              <th style={tableHeaderStyle}>Package Name</th>
              <th style={tableHeaderStyle}>Duration</th>
              <th style={tableHeaderStyle}>Price</th>
              <th style={tableHeaderStyle}>Description</th>
              <th style={tableHeaderStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map(pkg => (
              <tr key={pkg._id} style={{color:"black"}}>
                <td style={tableCellStyle}>{pkg.packageType}</td>
                <td style={tableCellStyle}>{pkg.packageName}</td>
                <td style={tableCellStyle}>{pkg.duration}</td>
                <td style={tableCellStyle}>Rs.{pkg.price}</td>
                <td style={tableCellStyle}>{pkg.description}</td>
                <td style={tableCellStyle}>
                  <button style={actionButtonStyle} onClick={() => navigate(`/updatepkg/${pkg._id}`)}>Edit</button>
                  <button style={actionButtonStyle} onClick={() => confirmDelete(pkg._id)}>Delete</button>
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

const tableHeaderStyle = {
  padding: "10px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  backgroundColor : "rgba(255, 255, 255, 0.9)",
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

export default ViewPackage;
