import React, { useState } from 'react';
import './Fundraiser.css';

const Fundraiser = () => {
  const [formData, setFormData] = useState({
    title: '',
    goalAmount: '',
    description: '',
    category: 'education',
    duration: '30'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fundraiser created:', formData);
    // Add API call here
  };

  return (
    <div className="fundraiser-container">
      <div className="fundraiser-header">
        <h1>Create a Fundraiser</h1>
        <p>Start raising funds for your cause today</p>
      </div>

      <form className="fundraiser-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Fundraiser Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter a compelling title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="goalAmount">Goal Amount ($) *</label>
          <input
            type="number"
            id="goalAmount"
            name="goalAmount"
            value={formData.goalAmount}
            onChange={handleInputChange}
            placeholder="Enter target amount"
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your fundraiser goals and how funds will be used"
            rows="6"
            required
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="environment">Environment</option>
              <option value="social-justice">Social Justice</option>
              <option value="community">Community Development</option>
              <option value="emergency">Emergency Relief</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (Days) *</label>
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
            >
              <option value="7">7 Days</option>
              <option value="14">14 Days</option>
              <option value="30">30 Days</option>
              <option value="60">60 Days</option>
              <option value="90">90 Days</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancel">Cancel</button>
          <button type="submit" className="btn-submit">Create Fundraiser</button>
        </div>
      </form>
    </div>
  );
};

export default Fundraiser;