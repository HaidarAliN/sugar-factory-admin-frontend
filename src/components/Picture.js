import axios from "axios";
import { useState, useEffect } from "react";
import GetData from "./GetData";
import BASE_API_URL from '../services/BaseUrl';

const Picture = () => {
    const [blogs, setBlogs] = useState(null);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

useEffect(async () => {
    const response = await axios.get(`${BASE_API_URL}/api/get-sent-messages`);
    const data_fetched = response.data;
    setBlogs(data_fetched);
}, []);


  return (
    <div className="home">
        {blogs && <GetData data={blogs} title="Load Un-approved pictures" handleDelete={handleDelete} />}
    </div>
  );
}
 
export default Picture;