// MusicUploadForm.js
import React, { useState } from 'react';

const MusicUploadForm = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Simulate file upload process with a mock progress indicator
      console.log('Uploading file:', selectedFile.name);
      const progressInterval = setInterval(() => {
        console.log('Upload progress...');
      }, 1000);

      // Simulate network latency with a timeout
      setTimeout(() => {
        clearInterval(progressInterval);
        console.log('File upload complete!');
        onUpload(selectedFile);
      }, 5000);
    }
  };

  return (
    <div className="music-upload-form">
      <input
        type="file"
        accept=".mp3, .wav"
        onChange={handleFileChange}
      />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default MusicUploadForm;
