'use client';

import React from 'react';

const AddNewVisitors = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>Add New Visitors</div>
      <div style={styles.form}>
        <h1 style={styles.title}>Where are you from?</h1>
        <input
          type="text"
          placeholder="Enter your address here"
          style={styles.input}
        />
        <p style={styles.description}>
          This address will be your primary location as a user in the creware coworks system.
        </p>
        <button style={styles.button}>CONTINUE</button>
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
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    marginBottom: '12px',
    boxSizing: 'border-box',
  },
  description: {
    fontSize: '14px',
    color: '#757575',
    marginBottom: '20px',
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
  },
};

export default AddNewVisitors;