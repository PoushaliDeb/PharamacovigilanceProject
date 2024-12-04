'use client';

import React, { useState } from 'react';

const AddNewVisitors = () => {
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);

  const handleSelection = (purpose: string) => {
    setSelectedPurpose(purpose);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Add New Visitors</div>
      <div style={styles.form}>
        <h1 style={styles.title}>What is your purpose for visiting?</h1>
        <div style={styles.options}>
          <label style={styles.option}>
            <input
              type="radio"
              name="purpose"
              value="Explore Office Space"
              onChange={() => handleSelection('Explore Office Space')}
              style={styles.radio}
            />
            <span style={styles.label}>Explore Office Space</span>
          </label>
          <label style={styles.option}>
            <input
              type="radio"
              name="purpose"
              value="Meeting with coworker"
              onChange={() => handleSelection('Meeting with coworker')}
              style={styles.radio}
            />
            <span style={styles.label}>Meeting with coworker</span>
          </label>
          <label style={styles.option}>
            <input
              type="radio"
              name="purpose"
              value="Other"
              onChange={() => handleSelection('Other')}
              style={styles.radio}
            />
            <span style={styles.label}>Other</span>
          </label>
        </div>
        <button style={styles.button} disabled={!selectedPurpose}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#D32F2F',
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
  },
  form: {
    maxWidth: '400px',
    width: '100%',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333333',
    textAlign: 'center',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
  },
  radio: {
    marginRight: '10px',
    accentColor: '#D32F2F',
  },
  label: {
    fontSize: '16px',
    color: '#333333',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#D32F2F',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    disabled: {
      backgroundColor: '#e0e0e0',
      color: '#9e9e9e',
      cursor: 'not-allowed',
    },
  },
};

export default AddNewVisitors;