import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../Component/Header/Header';

function PackageList() {
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

  const deletePackage = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/package/delete/${id}`);
      alert('Package deleted successfully');
      fetchPackages(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting package:', error);
      alert('Error deleting package');
    }
  };

  return (
    <div style={{ backgroundImage:"url('Images/PackageList.jpg')",backgroundSize: "cover" ,minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header style={{ width: "100%" }}/>
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
            {packages.map((pkg) => (
              <tr style={{color: "white" }} key={pkg._id}>
                <td style={tableCellStyle}>{pkg.packageType}</td>
                <td style={tableCellStyle}>{pkg.packageName}</td>
                <td style={tableCellStyle}>{pkg.duration}</td>
                <td style={tableCellStyle}>${pkg.price}</td>
                <td style={tableCellStyle}>{pkg.description}</td>
                <td style={tableCellStyle}>
                  <button style={actionButtonStyle} onClick={() => navigate(`/update/${pkg._id}`)}>Edit</button>
                  <button style={actionButtonStyle} onClick={() => deletePackage(pkg._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default PackageList;
