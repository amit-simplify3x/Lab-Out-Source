import React, { useState } from 'react';
import '../styles/BookTest.css'; // Import your CSS file

const BookTest = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [area, setArea] = useState('');
  const [testInfo, setTestInfo] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any submission logic here
    console.log('Form submitted!');
  };

  // Sample collection master data
  const collectionMasterData = [
  { id: 1, name: 'Amit Kumar', mobile: '9876543210', area: 'Ranchi' },
  { id: 2, name: 'Priya Singh', mobile: '8765432109', area: 'Hinoo' },
  { id: 3, name: 'Rahul Verma', mobile: '7654321098', area: 'Doranda' },
  { id: 4, name: 'Anita Kumari', mobile: '6543210987', area: 'Kanke' },
  { id: 5, name: 'Vikas Yadav', mobile: '5432109876', area: 'Kokar' },
  { id: 6, name: 'Ritu Sharma', mobile: '9876543210', area: 'Lalpur' },
  { id: 7, name: 'Suresh Tiwari', mobile: '8765432109', area: 'Argora' },
  { id: 8, name: 'Neeta Devi', mobile: '7654321098', area: 'Dhurwa' },
  { id: 9, name: 'Rajesh Singh', mobile: '6543210987', area: 'Dipatoli' },
  { id: 10, name: 'Puja Kumari', mobile: '5432109876', area: 'Kadru' },
  { id: 11, name: 'Manoj Gupta', mobile: '9876543210', area: 'Kutchery' },
  { id: 12, name: 'Suman Singh', mobile: '8765432109', area: 'Kanke Road' },
  { id: 13, name: 'Rohit Kumar', mobile: '7654321098', area: 'Bariatu' },
  { id: 14, name: 'Pooja Devi', mobile: '6543210987', area: 'Dhruwa' },
  { id: 15, name: 'Sanjay Sahu', mobile: '5432109876', area: 'Dipatoli' },
  { id: 16, name: 'Anjali Kumari', mobile: '9876543210', area: 'Doranda' },
  { id: 17, name: 'Vinay Gupta', mobile: '8765432109', area: 'Hatia' },
  { id: 18, name: 'Rani Devi', mobile: '7654321098', area: 'Kanke' },
  { id: 19, name: 'Santosh Singh', mobile: '6543210987', area: 'Lalpur' },
  { id: 20, name: 'Anita Devi', mobile: '5432109876', area: 'Morabadi' },
  { id: 21, name: 'Alok Kumar', mobile: '9876543210', area: 'Namkum' },
  { id: 22, name: 'Rina Kumari', mobile: '8765432109', area: 'Ormanjhi' },
  { id: 23, name: 'Rajesh Kumar', mobile: '7654321098', area: 'Ratu' },
  { id: 24, name: 'Sunita Devi', mobile: '6543210987', area: 'Sadar' },
  { id: 25, name: 'Vijay Singh', mobile: '5432109876', area: 'Silli' },
  { id: 26, name: 'Puja Kumari', mobile: '9876543210', area: 'Sonari' },
  { id: 27, name: 'Raj Gupta', mobile: '8765432109', area: 'Tatisilwai' },
  { id: 28, name: 'Monika Kumari', mobile: '7654321098', area: 'Tupudana' },
  { id: 29, name: 'Arun Singh', mobile: '6543210987', area: 'Tatisilwai' },
  { id: 30, name: 'Shalini Devi', mobile: '5432109876', area: 'Vikash Nagar' },
  // Add more names and areas around Ranchi as needed
];


  return (
    <div className="book-test-container">
      <h1>Book Test</h1>
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
          <label>Mobile Number:</label>
          <input 
            type="text" 
            value={mobileNumber} 
            onChange={(e) => setMobileNumber(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Area:</label>
          <input 
            type="text" 
            value={area} 
            onChange={(e) => setArea(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Test Information:</label>
          <textarea 
            value={testInfo} 
            onChange={(e) => setTestInfo(e.target.value)} 
          />
        </div>

        <button type="submit" className="button-submit">Submit</button>
      </form>

      <h2>Collection Master</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {collectionMasterData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
              <td>{item.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTest;
