import { useState } from 'react';
import axios from 'axios';

function AddProPackage() {
    const [packageType, setType] = useState("");
    const [proPackageName, setName] = useState("");
    const [proPrice, setPrice] = useState("");
    const [proDuration, setDuration] = useState("");
    const [reason, setReason] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newProPackage = {
            packageType,
            proPackageName,
            proPrice,
            proDuration,
            reason
        }

        axios.post('http://localhost:3000/proPackage/add', newProPackage)
            .then(() => {
                alert("Promotional Package Added");
                setType('');
                setName('');
                setPrice('');
                setDuration('');
                setReason('');
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex flex-col justify-center items-center py-8 bg-cover bg-center" style={{ backgroundImage: "url('/Images/AddProPackage.jpg')" }}>
                <div className="max-w-md w-full bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-center mb-6">Add Promotional Packages</h2>
                    <form onSubmit={sendData}>
                        <div className="mb-4">
                            <label htmlFor="packageType" className="block font-bold mb-2">Package Type</label>
                            <input type="text" className="form-input w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" id="packageType" value={packageType} onChange={(e) => setType(e.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="packageName" className="block font-bold mb-2">Package Name</label>
                            <input type="text" className="form-input w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" id="packageName" value={proPackageName} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block font-bold mb-2">Price</label>
                            <input type="number" className="form-input w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" id="price" value={proPrice} onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="duration" className="block font-bold mb-2">Duration</label>
                            <input type="text" className="form-input w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" id="duration" value={proDuration} onChange={(e) => setDuration(e.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="reason" className="block font-bold mb-2">Reason</label>
                            <textarea className="form-textarea w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" id="reason" value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProPackage;