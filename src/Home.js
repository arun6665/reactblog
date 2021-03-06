import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'arun', id:1},
      { title: 'Full stack tips', body: 'lorem ipsum...', author: 'sudeep', id:2},
      { title: 'How to build modern webapps', body: 'lorem ipsum...', author: 'arun', id:3}
  ]);

  const handleDelete = (id) =>
  {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
    
 
return (
  <div className="home">
    <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
   
  </div>
);

}

export default Home;
