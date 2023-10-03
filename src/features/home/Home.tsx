import BlogList from "../blogs/BlogList";

const Home = () => {
  return ( 
    <div className="home">
      <div className="home__body">
        <h2>Blog List</h2>
        <BlogList />
      </div>
    </div>
   );
}
 
export default Home;