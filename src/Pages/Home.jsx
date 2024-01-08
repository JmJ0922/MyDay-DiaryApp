import React, { useState } from 'react';
import './Home.css';
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleClick = () => {
    if (files.length === 0) {
      console.error('No files uploaded');
      return;
    }

    setShowPreview(true);
  };

  const handleBack = () => {
    setShowPreview(false);
  };

  const notify = () => {
    toast("Successfully uploaded");
  };

  const handleConfirm = () => {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth();
    const yyyy = now.getFullYear();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const completedOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;

    const existingData = JSON.parse(localStorage.getItem('todoData'));
    const dataArray = Array.isArray(existingData) ? existingData : [];

    const newEntry = {
      title,
      description,
      image: files[0] && URL.createObjectURL(files[0]),
      completedOn,
    };

    const newData = [...dataArray, newEntry];
    localStorage.setItem('todoData', JSON.stringify(newData));

    setShowPreview(false);
    // Reset form values if needed
    setTitle('');
    setDescription('');
    setFiles([]);

  };

  return (
    <div className='todo-wrapper'>
      <div className='todo-input'>
        {showPreview ? (
          <div className='preview-card'>
            <h3>{title}</h3>
            <p>{description}</p>
            {files.length > 0 && <img src={URL.createObjectURL(files[0])} alt='Preview' />}
            <p>Image Name: {files[0] && files[0].name}</p>
            <div className='new'><button onClick={handleBack} className='primaryBtn'>Back</button>
            <button className='primaryBtn hi' onClick={() => { handleConfirm(); notify(); }}>Confirm</button>
            </div>
            
          </div>
        ) : (
          <>
            <div className='todo-input-item'>
              <label>Title</label>
              <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What's the title?" />
            </div>
            <div className='todo-input-item'>
              <label>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="How was your day?" />
            </div>
            <div className='todo-input-item'>
              <div className='imagearea' {...getRootProps()}>
                <input name='file' type='file' className='file' multiple {...getInputProps()} />
                {isDragActive ? <p>Drop the files here</p> : <p>Drag & drop some images here, or click to select files</p>} <br/>
                <p>{files[0] && files[0].name}</p>
              </div>
            </div>
            <br/>
            <button type='button' className='primaryBtn' onClick={handleClick}>
              Add
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
