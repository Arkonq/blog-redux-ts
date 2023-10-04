import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Blog, BlogsRootState } from '../types';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', () => {
  return fetch('http://localhost:8000/blogs')
    .then(res => res.json());
})

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id: number) => {
  return await fetch('http://localhost:8000/blogs/' + id, { method: "DELETE" })
    .then(res => res.json());
})

export const createBlog = createAsyncThunk('blogs/createBlog', async (data: Blog) => {
  return await fetch('http://localhost:8000/blogs', {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json());
})

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    loading: false,
    blogs: [],
    error: '',
  } as BlogsRootState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all Blogs
    builder.addCase(fetchBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message!;
    });
    // Delete Blog by Id
    builder.addCase(deleteBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = '';
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message!;
    });
    // Add Blog
    builder.addCase(createBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = '';
    });
    builder.addCase(createBlog.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message!;
    });
  }
})

// export const { add, remove } = blogsSlice.actions;
// export const selectBlogs = (state: Array<any>) => state;
export default blogsSlice.reducer;