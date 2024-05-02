import { useState } from 'react';
import axios from 'axios';
import backgroundImage from "../../img/back.jpg";

function AddPackage() {
  const [packageType, setType] = useState("");
  const [packageName, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newPackage = {
      packageType,
      packageName,
      duration,
      price,
      description
    };

    axios.post('http://localhost:3000/package/add', newPackage)
      .then(() => {
        alert("Package Added");
        setType('');
        setName('');
        setDuration('');
        setPrice('');
        setDescription('');
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 bg-cover bg-center " 
    
    style={{ backgroundImage: `url(${backgroundImage})` }}

    >
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Packages</h2>
        <form onSubmit={sendData} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="packageType" className="block text-gray-700 font-bold mb-2">Package Type</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="packageType"
              onChange={(e) => setType(e.target.value)}
              value={packageType}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="packageName" className="block text-gray-700 font-bold mb-2">Package Name</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="packageName"
              onChange={(e) => setName(e.target.value)}
              value={packageName}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">Duration</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="duration"
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPackage;