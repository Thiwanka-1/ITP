import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PaymentPage() {
  const { id } = useParams(); // Get package ID from URL
  const [packageData, setPackageData] = useState({ price: '' });
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  useEffect(() => {
    fetchPackageDetails();
  }, [id]); // Run when the ID changes

  const fetchPackageDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8070/package/get/${id}`);
      const packageInfo = response.data;
      setPackageData({
        price: packageInfo.price || '',
      });
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  const handleNumberInput = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    const { name } = e.target;

    if (name === 'cardNumber') {
      setCardNumber(numericValue);
    } else if (name === 'expiryDate') {
      setExpiryDate(numericValue);
    } else if (name === 'cvv') {
      setCVV(numericValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentData = {
      packageId: id,
      email,
      cardNumber,
      cvv,
      expiryDate,
    };

    try {
      await axios.post('http://localhost:8070/payment/add', paymentData);

      alert('Payment successful!'); // Indicate payment success
      setEmail('');
      setCardNumber('');
      setCVV('');
      setExpiryDate('');
    } catch (error) {
      alert(`Error making payment: ${error.message}`); // Display error message if any
    }
  };

  return (
    <div style={{
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        maxWidth: '500px',
      }}>
        <h2>Payment for Package</h2>
        <p>Package Price: ${packageData.price}</p> {/* Display the package price */}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
              type='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid lightgray',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Card Number:</label>
            <input
              type='text'
              name='cardNumber'
              value={cardNumber}
              required
              onChange={handleNumberInput}
              maxLength={16} // Maximum length for card number
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid lightgray',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>CVV:</label>
            <input
              type='text'
              name='cvv'
              value={cvv}
              required
              maxLength={3} // CVV should be 3 digits
              onChange={handleNumberInput}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid lightgray',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Expiry Date (MM/YY):</label>
            <input
              type='text'
              name='expiryDate'
              value={expiryDate}
              required
              maxLength={4} // Maximum length for expiry date (MMYY)
              onChange={handleNumberInput}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid lightgray',
              }}
            />
          </div>
          
          <button type='submit' style={{ padding: '10px', background: 'blue', color: 'white', borderRadius: '5px' }}>
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
