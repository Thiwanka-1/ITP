import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ display: 'flex', height: '120vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1
      }}>
        <div
          style={{
            cursor: 'pointer',
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: activeTab === 'home' ? '#555' : '#333',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '18px'
          }}
          onClick={() => handleTabClick('home')}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        </div>
        {/* Packages Dropdown */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#333', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            Packages
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/add" style={{ textDecoration: 'none', color: 'white' }}>Add Package</Link>
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/addpro" style={{ textDecoration: 'none', color: 'white' }}>Add Promotional Package</Link>
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/viewpkg" style={{ textDecoration: 'none', color: 'white' }}>Standard Package</Link>
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/viewpro" style={{ textDecoration: 'none', color: 'white' }}>Promotional Package</Link>
            </div>
          </div>
        </div>
        {/* Orders Dropdown */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#333', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            Orders
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/order" style={{ textDecoration: 'none', color: 'white' }}>Package Orders</Link>
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/proorder" style={{ textDecoration: 'none', color: 'white' }}>Promotional Orders</Link>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#333', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            Maintain
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/req" style={{ textDecoration: 'none', color: 'white' }}>Add Requests</Link>
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/task" style={{ textDecoration: 'none', color: 'white' }}>Add Task</Link>
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/viewreq" style={{ textDecoration: 'none', color: 'white' }}>View Requests</Link>
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/viewtask" style={{ textDecoration: 'none', color: 'white' }}>View Task</Link>
            </div>
          </div>
        </div>


        <div style={{ marginBottom: '20px' }}>
          <div style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#333', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            Doctor Appointment
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/appoint" style={{ textDecoration: 'none', color: 'white' }}>Appointments</Link>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#333', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            Trainer Bookings
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/scheduledisplay" style={{ textDecoration: 'none', color: 'white' }}>View Bookings</Link>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#333', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            Trainer Request
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/TrainerRequest" style={{ textDecoration: 'none', color: 'white' }}>Workouts</Link>
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }}>
              <Link to="/Report" style={{ textDecoration: 'none', color: 'white' }}>Generate Report</Link>
            </div>
          </div>
        </div>

      </div>
      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' ,
        backgroundImage: "url('/Images/fff.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
        
        }}>
        {activeTab === 'home' && (
          <div>
            <h1>Welcome to Admin Dashboard</h1>
            <p>This is the home page of the admin dashboard.</p>
          </div>
        )}
        {/* Add routes for other pages here */}
      </div>
    </div>
  );
}

export default Dashboard;
