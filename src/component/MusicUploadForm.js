import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../redux/action'
import './MusicUploadForm.css'
const MusicUploadForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      console.log('Uploading file:', file.name);

      // Simulate asynchronous behavior with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('File upload complete');
      dispatch(addSong(file));
      setFile(null);
    }
  };

  return (
    <div className='music-uplaod-form'>
      <h2>Music Upload Form</h2>
      <label className="choose-button" htmlFor="fileInput">
        <span className="download-icon">⬇️</span> Choose Your File
      </label>
      <input
        id="fileInput"
        className="file-input"
        type="file"
        accept=".mp3, .wav"
        onChange={handleFileChange}
      />
      {file && <p>Selected File: {file.name}</p>}
      <button className='upload-button'  onClick={handleUpload} disabled={!file}>
        Upload
      </button>
    </div>
  );
};

export default MusicUploadForm;
