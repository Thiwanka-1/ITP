import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Component/Header/Header';

function ViewProOrders() {
  const [proOrders, setOrders] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:8070/userProPkg');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching Orders:', error);
    }
  };

  const confirmDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this Order?')) {
      await deletePackage(id);
    }
  };

  const deletePackage = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/userProPkg/delete/${id}`);
      alert('Order deleted successfully');
      fetchPackages(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting Order:', error);
      alert('Error deleting order');
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
              <th style={tableHeaderStyle}>Customer Name</th>
              <th style={tableHeaderStyle}>Email</th>
              <th style={tableHeaderStyle}>Phone</th>
              <th style={tableHeaderStyle}>Date</th>
              <th style={tableHeaderStyle}>Package</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {proOrders.map((pkg) => (
              <tr style={{color: "white" }} key={pkg._id}>
                <td style={tableCellStyle}>{pkg.custName}</td>
                <td style={tableCellStyle}>{pkg.proEmail}</td>
                <td style={tableCellStyle}>{pkg.proPhone}</td>
                <td style={tableCellStyle}>{pkg.proDate}</td>
                <td style={tableCellStyle}>{pkg.selectedProPackage}</td>
                <td style={tableCellStyle}>
                  <button style={actionButtonStyle} onClick={() => confirmDelete(pkg._id)}>Delete</button>
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

export default ViewProOrders;
