import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'arun', id:1},
      { title: 'Full stack tips', body: 'lorem ipsum...', author: 'arun', id:2},
      { title: 'How to build modern webapps', body: 'lorem ipsum...', author: 'arun', id:3}
  ]);
    
 
return (
  <div className="home">
    <BlogList blogs={blogs} title="All Blogs"/>
  </div>
);

}

export default Home;
