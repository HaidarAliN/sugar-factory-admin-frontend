import axios from "axios";
import { useState, useEffect } from "react";
import GetData from "./GetData";
import BASE_API_URL from '../services/BaseUrl';

const Home = () => {
  
  const [blogs, setBlogs] = useState(null);
  const [access_token, setAccess_token] = useState(JSON.parse( localStorage.getItem('access_token') ));
  const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
  }

  useEffect(async () => {
  const response = await axios.get(`${BASE_API_URL}/get-sent-messages`,
    {headers:{
      'Authorization' : `Bearer ${access_token}`
    }}
  );
  const data_fetched = response.data;
  setBlogs(data_fetched);
  }, []);

  return (
    <div className="home">
        {blogs && <GetData data={blogs} title="Messages Requests" handleDelete={handleDelete} type='message'/>}
    </div>
  );
}
 
export default Home;