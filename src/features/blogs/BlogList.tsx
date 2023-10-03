import { useDispatch, useSelector } from "react-redux";
import { Blogs, Blog } from './blogsSlice'
import {Link} from 'react-router-dom';

const BlogList = () => {
  const blogs: Blog[] = useSelector((state: Blogs) => state.blogs);

  return (
    <div className="blog">
      <div className="blog__list">
        {blogs.map((blog: Blog) =>
          <Link to={`/details/${blog.id}`}  className="blog__item" key={blog.id}>
            <p className="blog__title">{blog.title}</p>
            <p className="blog__body">{blog.body.slice(0, 100)}</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default BlogList;