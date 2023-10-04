import { useDispatch, useSelector } from "react-redux";
// import { Blogs, Blog } from './blogsSlice'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { fetchBlogs } from './blogsSlice';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Blog, BlogsRootState } from "../types";

const BlogList = () => {
  const blogs = useSelector((state: {blogs: BlogsRootState}) => state.blogs);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return (
    <div className="blog">
      {blogs.loading && <div>Loading...</div>}
      {!blogs.loading && blogs.error ? <div>Error: {blogs.error} </div> : null}
      {!blogs.loading && blogs.blogs.length ? (
        <div className="blog__list">
          {blogs.blogs.map((blog: Blog) =>
            <Link to={`/details/${blog.id}`} className="blog__item" key={blog.id}>
              <p className="blog__title">{blog.title}</p>
              <p className="blog__body">{blog.body.slice(0, 100)}</p>
            </Link>
          )}
        </div>
      ) : null
      }
    </div>
  );
}

export default BlogList;