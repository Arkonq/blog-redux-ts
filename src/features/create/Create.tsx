import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Blog } from '../types';
import { createBlog } from '../blogs/blogsSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setbody] = useState('');
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const navigate = useNavigate();
  const [error, setError] = useState('');
  let awaitResult: any;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const blog: Blog = { title, body };
    awaitResult = await dispatch(createBlog(blog));
    if (awaitResult.error) { 
      setError(awaitResult.error.name + ", " + awaitResult.error.message); 
      return; 
    } 
    navigate('/');
  }

  return (
    <div className="create">
      <div className="create__body">
        <h2>Create Blog</h2>
        {error && <div style={{color:"red"}}>Error: {error}</div>}
        <form className="create__form" onSubmit={(e) => handleSubmit(e)}>
          <div className="create__form-group">
            <label>Title</label>
            <input required type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="create__form-group">
            <label>Body</label>
            <textarea rows={5} required onChange={(e) => setbody(e.target.value)} />
          </div>
          <div className="create__form-group">
            <button type='submit'>Create</button>
          </div>          
        </form>
      </div>
    </div>
  );
}

export default Create;