import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    batch: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus({ success: false, message: '' }); // Reset status on new submission

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      setSubmitStatus({
        success: true,
        message: `Registration successful! ${response.data.paymentDetails.message}`
      });
      // Resetting the form
      setFormData({
        name: '',
        age: '',
        contact: '',
        batch: ''
      });
      console.log('Registration suceessful');
    } catch (error) {
      console.error('Registration error:', error);
      // different errors to be handled differently
      setSubmitStatus({
        success: false,
        message: error.response ? `${error.response.data.message} ${error.response.data.paymentMessage || ''}` : 'Registration failed!'
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="batch">Batch</label>
          <select id="batch" name="batch" value={formData.batch} onChange={handleChange}>
            <option value="">Select a batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      {submitStatus.message && (
        <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
