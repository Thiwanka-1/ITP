import React, { useState } from 'react';
import axios from 'axios'; 
import Header from '../../Component/Header/Header';

function AddProPackage() {
    
    const[packageType, setType] = useState("");
    const[proPackageName, setName] = useState("");
    const[proPrice, setPrice] = useState("");
    const[proDuration, setDuration] = useState("");
    const[reason, setReason] = useState("");

    function sendData(e){
        e.preventDefault();


        const newProPackage={
            packageType,
            proPackageName,
            proPrice,
            proDuration,
            reason
        }

        axios.post('http://localhost:8070/proPackage/add', newProPackage).then(()=>{
            alert("Promotional Package Added");
            setType('');
            setName('');
            setPrice('');
            setDuration('');
            setReason('');

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
                <h2 style={{ textAlign: "center", marginBottom: "30px",color:"black" }}>Add Promotional Packages</h2>
                <form onSubmit={sendData}>
                    <div className="mb-4">
                        <label htmlFor="packageType" className="form-label">Package Type</label>
                        <input type="text" className="form-control" id="packageType" aria-describedby="packageTypeHelp" onChange={(e)=>{setType(e.target.value)}} required></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="packageName" className="form-label">Package Name</label>
                        <input type="text" className="form-control" id="packageName" onChange={(e)=>{setName(e.target.value)}} required></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" onChange={(e)=>{setPrice(e.target.value)}} required></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="duration" className="form-label">Duration</label>
                        <input type="text" className="form-control" id="duration" onChange={(e)=>{setDuration(e.target.value)}} required></input>
                    </div>
                    <div className="mb-4">
                     <label htmlFor="reason" className="form-label">Reason</label>
                      <textarea className="form-control" id="reason" onChange={(e)=>{setReason(e.target.value)}} required></textarea>
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

export default AddProPackage;
