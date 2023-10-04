import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlogs, deleteBlog } from "../blogs/blogsSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Blog, BlogsRootState } from "../types";

const Details = () => {
  // get id from details params
  const { id } = useParams<{id: string}>(); 
  // get blog by id
  const blog = useSelector((state: {blogs: BlogsRootState}) => state.blogs.blogs).find(b => b.id === Number.parseFloat(id!)) as Blog; 

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  // if u got to url directly, than blog would be empty as it wasn't initialized from home page
  if(blog === undefined) {
    dispatch(fetchBlogs())
  }
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    dispatch(deleteBlog(id));    
    navigate('/');
  }

  return (
    <div className="details">
      <div className="details__body">
        <h2>Details</h2>
        {!blog && <div>Loading...</div>}
        {blog && 
        <>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <button onClick={() => handleDelete(blog.id!)}>Delete</button>
        </>
        }
      </div>
    </div>
  );
}

export default Details; 