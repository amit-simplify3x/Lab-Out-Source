import React, { useState } from 'react';

const PriceList = () => {
  // Sample price list data
  const priceListData = [
  { test: 'Complete Blood Count (CBC)', price: '₹200' },
  { test: 'Basic Metabolic Panel (BMP)', price: '₹250' },
  { test: 'Comprehensive Metabolic Panel (CMP)', price: '₹300' },
  { test: 'Blood Glucose Test', price: '₹100' },
  { test: 'Lipid Profile (Cholesterol, Triglycerides)', price: '₹350' },
  { test: 'Liver Function Tests (LFTs)', price: '₹300' },
  { test: 'Kidney Function Tests', price: '₹250' },
  { test: 'Thyroid Function Tests (TFTs)', price: '₹200' },
  { test: 'Hemoglobin A1c (HbA1c)', price: '₹150' },
  { test: 'Coagulation Tests (PT, INR, PTT)', price: '₹200' },
  { test: 'Routine Urinalysis', price: '₹80' },
  { test: 'Urine Culture and Sensitivity', price: '₹150' },
  { test: 'X-rays', price: '₹400' },
  { test: 'CT Scans', price: '₹1000' },
  { test: 'MRI Scans', price: '₹1500' },
  { test: 'Ultrasounds', price: '₹300' },
  { test: 'PET Scans', price: '₹2000' },
  { test: 'Bone Density Scans (DEXA)', price: '₹250' },
  { test: 'Electrocardiogram (ECG or EKG)', price: '₹50' },
  { test: 'Echocardiogram', price: '₹400' },
  { test: 'Stress Test (Exercise Tolerance Test)', price: '₹200' },
  { test: 'Holter Monitor', price: '₹300' },
  { test: 'Cardiac Catheterization', price: '₹1500' },
  { test: 'Endoscopy and Colonoscopy', price: '₹800' },
  { test: 'Pap Smear (Cervical Cancer Screening)', price: '₹100' },
  { test: 'Mammography (Breast Cancer Screening)', price: '₹200' },
  { test: 'Prostate-Specific Antigen (PSA) Test', price: '₹80' },
  { test: 'Skin Prick Test', price: '₹120' },
  { test: 'Blood Allergy Tests (IgE)', price: '₹150' },
  { test: 'Genetic Testing', price: '₹500' },
  { test: 'Hormone Tests', price: '₹300' },
  { test: 'Pregnancy Tests', price: '₹30' },
  { test: 'HIV Testing', price: '₹100' },
  { test: 'Hepatitis Panel', price: '₹200' },
  { test: 'Stool Culture', price: '₹120' },
  { test: 'Occult Blood Test', price: '₹80' },
  { test: 'Sputum Culture and Sensitivity', price: '₹150' },
  { test: 'Serology Tests', price: '₹100' },
  { test: 'Tumor Marker Tests', price: '₹250' },
  { test: 'Throat Culture', price: '₹80' },
  { test: 'Vitamin and Mineral Tests', price: '₹150' },
  { test: 'Drug Tests', price: '₹200' },
  // Add more test items as needed
];

const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter price list data based on search term
  const filteredPriceList = priceListData.filter((item) =>
    item.test.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="price-list-container">
      <h1>Price List</h1>
        <input
        type="text"
        placeholder="Search tests..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input" // Apply custom class for styling
      />
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredPriceList.map((item, index) => (
            <tr key={index}>
              <td>{item.test}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;