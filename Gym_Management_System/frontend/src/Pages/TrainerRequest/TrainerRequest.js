import React from 'react';
import { Link } from 'react-router-dom'; 

function Workoutpage() {
  const buttonStyle = {
    padding: '20px 40px', // Increase padding for larger button size
    fontSize: '24px', // Increase font size
    borderRadius: '10px', // Rounded corners
    border: 'none', // Remove border
    backgroundColor: '#007bff', // Button color
    color: '#fff', // Text color
    textDecoration: 'none', // Remove underline
    cursor: 'pointer', // Show pointer on hover
    margin: '10px', // Add margin between buttons
  };
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Set minimum height to fill the viewport
    backgroundColor: 'black',
    backgroundSize: 'cover', // Ensure background covers the entire viewport
    backgroundRepeat: 'no-repeat', // Prevent background from repeating
  };

  return (
    <div style={containerStyle}>
      <h1>Select Your Requests</h1>
      {/* Use Link component with 'to' prop to navigate to different pages */}
      <Link to="/wpage" className="button-link">
        <button style={buttonStyle} id="button11">Create Workout Plan</button>
      </Link>
      <Link to="/UpdateWorkout" className="button-link">
        <button style={buttonStyle} id="button22">Change Workout Plan</button>
      </Link>
      <Link to="/Shedule" className="button-link">
        <button style={buttonStyle} id="button33">Request Schedule Change</button>
      </Link>
    </div>
  );
}

export default Workoutpage;
