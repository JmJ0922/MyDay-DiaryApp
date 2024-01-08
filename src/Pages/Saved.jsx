import React, { useEffect, useState } from 'react';
import './Memories.css'

const Saved = () => {
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
          
          </div>
      ))}
    </div>
  );
};
export default Saved