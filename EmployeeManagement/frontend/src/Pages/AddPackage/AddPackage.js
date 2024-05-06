import React, { useState } from 'react';
import axios from 'axios';

function AddPackage() {
    const [packageType, setPackageType] = useState("");
    const [packageName, setPackageName] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const validateInput = (name, value) => {
        switch (name) {
            case 'packageName':
                if (!/^[a-zA-Z\s]*$/.test(value)) {
                    return "Only letters and spaces are allowed";
                }
                break;
            case 'price':
                if (value < 0) {
                    return "Price cannot be negative";
                }
                break;
            default:
                break;
        }
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const error = validateInput(name, value);
        setErrors({ ...errors, [name]: error });

        if (name === 'packageName' && /\d/.test(value)) {
            return;
        }

        switch (name) {
            case 'packageType':
                setPackageType(value);
                break;
            case 'packageName':
                setPackageName(value);
                break;
            case 'duration':
                setDuration(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };

    const sendData = (e) => {
        e.preventDefault();

        // Ensure all validations are passed
        if (Object.values(errors).some(error => error !== "")) {
            alert("Please correct the errors before submitting.");
            return;
        }

        const newPackage = {
            packageType,
            packageName,
            duration,
            price,
            description
        };

        axios.post('http://localhost:8070/package/add', newPackage).then(() => {
            alert("Package Added");
            setPackageType('');
            setPackageName('');
            setDuration('');
            setPrice('');
            setDescription('');
        }).catch((err) => {
            alert(err)
        });
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                backgroundImage: "url('/Images/AddPackage.png')",
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
                    <h2 style={{ textAlign: "center", marginBottom: "30px" ,color:"black"}}>Add Packages</h2>
                    <form onSubmit={sendData}>
                        <div className="mb-4">
                            <label htmlFor="packageType" className="form-label">Package Type</label>
                            <select className="form-select" id="packageType" name="packageType" onChange={handleChange} value={packageType} required>
                                <option value="">Select Package Type</option>
                                <option value="Standard">Standard</option>
                                <option value="Promotional">Promotional</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="packageName" className="form-label">Package Name</label>
                            <input type="text" className="form-control" id="packageName" name="packageName" onChange={handleChange} value={packageName} required />
                            {errors.packageName && <div className="text-danger">{errors.packageName}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="duration" className="form-label">Duration</label>
                            <input type="text" className="form-control" id="duration" name="duration" onChange={handleChange} value={duration} required />
                            {errors.duration && <div className="text-danger">{errors.duration}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="price" name="price" onChange={handleChange} value={price} required />
                            {errors.price && <div className="text-danger">{errors.price}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" name="description" onChange={handleChange} value={description} required></textarea>
                            {errors.description && <div className="text-danger">{errors.description}</div>}
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button type="submit" className="btn btn-primary" style={{ textAlign: "center", marginRight:"200px" }}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPackage;
