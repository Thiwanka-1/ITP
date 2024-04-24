import React, { useState } from 'react';
import axios from 'axios'; 

function AddEmployee() {
    
    const[empid, setId] = useState("");
    const[empname, setName] = useState("");
    const[job, setJob] = useState("");
    

    function sendData(e){
        e.preventDefault();


        const newEmployee={
            empid,
            empname,
            job,
        }

        axios.post('http://localhost:8070/Employee/add', newEmployee).then(()=>{
            alert("Employee Added");
            setId('');
            setName('');
            setJob('');

        }).catch((err)=>{
            alert(err)
        })
    }


return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column", // Stack children vertically
    }}>
      
      <div style={{
        backgroundImage: "url('/Images/AddProPackage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flex: "1", // Take up remaining space
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center children horizontally
        justifyContent: "center", // Center children vertically
        paddingTop: "20px", // Add space on top if needed
      }}>
        <div style={{
                width: "90%", // Set a max width for the form
                maxWidth: "500px", // Maximum form width
                background: "rgba(255, 255, 255, 0.8)", // Slightly transparent background
                padding: "20px",
                borderRadius: "8px", // Rounded corners for the form
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // Soft shadow for depth
                margin: "20px 0", // Space between header and form
            }}>
                <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Add Employee</h2>
                <form onSubmit={sendData}>
                    <div className="mb-4">
                        <label htmlFor="empid" className="form-label">Employee Id</label>
                        <input type="text" className="form-control" id="empid" aria-describedby="packageTypeHelp" onChange={(e)=>{setId(e.target.value)}} required></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="empname" className="form-label">Employee Name</label>
                        <input type="text" className="form-control" id="empname" onChange={(e)=>{setName(e.target.value)}} required></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="job" className="form-label">Job</label>
                        <input type="text" className="form-control" id="job" onChange={(e)=>{setJob(e.target.value)}} required></input>
                    </div>
                    <div style={{ textAlign: "center" , marginRight:"300px"}}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>

  );
}

export default AddEmployee;
