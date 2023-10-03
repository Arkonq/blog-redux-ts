import { useDispatch, useSelector } from "react-redux";
import { Blogs, Blog, remove } from '../blogs/blogsSlice'
import { useParams, useNavigate } from 'react-router-dom';


const Details = () => {
  const { id } = useParams<{id: string}>();
  const blog: Blog = useSelector((state: Blogs) => state.blogs).find(b => b.id === Number.parseFloat(id!)) as Blog;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const deleteBlog = (id: number) => {
    dispatch(remove(id));
    navigate('/')
  }

  return (
    <div className="details">
      <div className="details__body">
        <h2>Details</h2>
        {blog && 
        <>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <button onClick={() => deleteBlog(blog.id)}>Delete</button>
        </>
        }
      </div>
    </div>
  );
}

export default Details; 