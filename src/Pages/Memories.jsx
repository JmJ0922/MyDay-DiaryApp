import React, { useEffect, useState } from 'react';
import './Memories.css';

const Memories = () => {
  const [todoDataList, setTodoDataList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('todoData');
    if (data) {
      setTodoDataList(JSON.parse(data));
    }
  }, []);

  
  return (
    <div className='mem'>
      {todoDataList.map((todoData, index) => (
        <div key={index} className='card-container'>
          <div className='image-container'><img src={todoData && todoData.image} alt=''/></div>
          <div className='card-content'>
            <div className='card-title'>
              <h3>{todoData && todoData.title}</h3>
            </div>
            <div className='card-body'>
              <p>{todoData && todoData.description}</p>
              <p>
                <small>{todoData && todoData.completedOn}</small>
              </p>
            </div>
          </div>
          <div className='btn'>
            <button>
              <a href='/view-more'>View More</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Memories;
