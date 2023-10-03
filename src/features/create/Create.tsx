import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Blog, add} from '../blogs/blogsSlice';
import {useNavigate} from 'react-router-dom';

const Create = () => {  
  const [title, setTitle] = useState('');
  const [body, setbody] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();    
    const blog: Blog = { title, body, id: Math.random()};
    dispatch(add(blog));
    navigate('/')
  }

  return ( 
    <div className="create">
      <div className="create__body">
        <h2>Create Blog</h2>
        <form className="create__form" onSubmit={(e) => handleSubmit(e)}>
          <div className="create__form-group">
            <label>Title</label>
            <input required type="text" onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="create__form-group">
            <label>Body</label>
            <textarea rows={5} required onChange={(e) => setbody(e.target.value)}/>
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