import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { addSong } from '../redux/action'
import '../style/MusicUploadForm.css'
const MusicUploadForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      setIsLoading(true); // Set loading state to true before the upload starts
  
      try {
//        console.log('Uploading file:', file.name);
        
        // Simulate asynchronous behavior with setTimeout
        await new Promise((resolve) => setTimeout(resolve, 2000));
  
  //      console.log('File upload complete');
        dispatch(addSong(file));
  
        setFile(null);
      } catch (error) {
        // Handle errors from the promise operation
    //    console.error('Error:', error);
      } finally {
        setIsLoading(false); // Set loading state to false after the upload completes or encounters an error
      }
    }
  };
  

  return (
    <div className='music-uplaod-form'>
      <h2>Music Upload Form</h2>
      <label className="choose-button" htmlFor="fileInput">
        <span className="download-icon"><FontAwesomeIcon icon={faDownload} /></span> Choose Your File
      </label>
      <input
        id="fileInput"
        className="file-input"
        type="file"
        accept=".mp3, .wav"
        onChange={handleFileChange}
      />
      <p> {file && <span>Selected File: {file.name}</span> || isLoading && <span>Uploading...</span>} </p>
      <button className='upload-button'  onClick={handleUpload} disabled={!file}>
          {isLoading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default MusicUploadForm;
