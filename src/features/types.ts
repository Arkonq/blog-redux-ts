export type Blog = {
  id?: number,
  body: string,
  title: string,
}

export type BlogsRootState = {
  loading: boolean,
  blogs: Array<Blog>,
  error: string,
}