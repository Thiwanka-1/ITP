import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Component/Header/Header';

function UserPackage() {
  const [cusName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('');

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

  function handleSubmit(e){
    e.preventDefault();

    const newPackage={
        cusName,
        email,
        phone,
        date,
        selectedPackage
    }

    axios.post('http://localhost:8070/userPkg/add', newPackage).then(()=>{
        alert("Package Added");
        setCustomerName('');
        setEmail('');
        setPhoneNumber('');
        setDate('');
        setSelectedPackage('');
    }).catch((err)=>{
        alert(err)
    })
}

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        backgroundImage: "url('/Images/UserPackage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
      }}>
        <div style={{
          width: "90%",
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          margin: "20px 0",
        }}>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Select Package</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="customerName" className="form-label">Customer Name</label>
              <input type="text" className="form-control" id="customerName" value={cusName} onChange={(e) => setCustomerName(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phoneNumber" value={phone} onChange={(e) => setPhoneNumber(e.target.value)} required/>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            <div className="mb-4">
              <label htmlFor="selectedPackage" className="form-label">Select Package</label>
              <select className="form-select" id="selectedPackage" value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} required>
                <option value="">Select a Package</option>
                {packages.map((pkg) => (
                  <option key={pkg._id} value={pkg.packageName}>{pkg.packageName}</option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex", marginRight: "100px" }}>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserPackage;
