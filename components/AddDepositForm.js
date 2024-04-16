import { useState } from 'react';
import axios from 'axios';

const AddDepositForm = () => {
  const [userId, setUserId] = useState('');
  const [cashAmount, setCashAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`/api/user/${userId}/deposit/${cashAmount}`);
      alert('Deposit added successfully!');
    } catch (error) {
      setErrorMessage('Failed to add deposit. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Deposit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label>Cash Amount:</label>
          <input type="number" value={cashAmount} onChange={(e) => setCashAmount(e.target.value)} />
        </div>
        <button type="submit">Add Deposit</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AddDepositForm;

