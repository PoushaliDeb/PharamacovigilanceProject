'use client';
import React, { useState } from 'react';

const AddNewVisitors = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleImageSelect = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="container">
      <h1>Add New Visitors</h1>
      <div className="upload-container">
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <div className="upload-buttons">
          <button className="upload-button" onClick={handleImageSelect}>
            <img
              src={selectedImage || '/placeholder-image-icon.png'}
              alt="Upload"
              className="icon"
            />
          </button>
          <button className="upload-button" onClick={handleImageSelect}>
            <img src="/plus-icon.png" alt="Add" className="icon" />
          </button>
        </div>
        <button className="done-button" disabled={!selectedImage}>
          Done
        </button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          height: 100vh;
          background-color: #ffffff;
        }

        h1 {
          font-size: 24px;
          color: #d32f2f;
          margin-bottom: 20px;
        }

        .upload-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .upload-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .upload-button {
          background-color: #f5f5f5;
          border: none;
          border-radius: 10px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .upload-button:hover {
          background-color: #e0e0e0;
        }

        .icon {
          width: 40px;
          height: 40px;
        }

        .done-button {
          width: 120px;
          height: 40px;
          background-color: #f5f5f5;
          color: #000000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .done-button:disabled {
          background-color: #e0e0e0;
          color: #a0a0a0;
          cursor: not-allowed;
        }

        .done-button:hover:not(:disabled) {
          background-color: #d32f2f;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default AddNewVisitors;