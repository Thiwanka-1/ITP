import React, { useState } from 'react';
import axios from 'axios'; 
import Header from '../../Component/Header/Header';

function AddPackage() {
    
    const[packageType, setType] = useState("");
    const[packageName, setName] = useState("");
    const[duration, setDuration] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");

    function sendData(e){
        e.preventDefault();

        const newPackage={
            packageType,
            packageName,
            duration,
            price,
            description
        }

        axios.post('http://localhost:8070/package/add', newPackage).then(()=>{
            alert("Package Added");
            setType('');
            setName('');
            setDuration('');
            setPrice('');
            setDescription('');

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
        backgroundImage: "url('/Images/AddPackage.png')",
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
                <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Add Packages</h2>
                <form onSubmit={sendData}>
                    <div className="mb-4">
                        <label htmlFor="packageType" className="form-label">Package Type</label>
                        <input type="text" className="form-control" id="packageType" aria-describedby="packageTypeHelp" onChange={(e)=>{setType(e.target.value)}}></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="packageName" className="form-label">Package Name</label>
                        <input type="text" className="form-control" id="packageName" onChange={(e)=>{setName(e.target.value)}}></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="duration" className="form-label">Duration</label>
                        <input type="text" className="form-control" id="duration" onChange={(e)=>{setDuration(e.target.value)}}></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" onChange={(e)=>{setPrice(e.target.value)}}></input>
                    </div>
                    <div className="mb-4">
                     <label htmlFor="description" className="form-label">Description</label>
                      <textarea className="form-control" id="description" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                 </div>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>

  );
}

export default AddPackage;
