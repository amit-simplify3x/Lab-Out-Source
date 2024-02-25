import React, { useState } from 'react';
import '../styles/Queries.css'; // Import your CSS file

const Queries = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="queries-container">
      <h1>Enquiry Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Details:</label>
          <textarea 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
          />
        </div>

        <button type="submit" className="button-submit" >Submit</button>
      </form>
    </div>
  );
};

export default Queries;
