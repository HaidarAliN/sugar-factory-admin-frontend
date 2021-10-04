import axios from "axios";
import { useState, useEffect } from "react";
import GetData from "./GetData";
import BASE_API_URL from '../services/BaseUrl';

const Picture = () => {
    const [data, seData] = useState(null);
    const [access_token, setAccess_token] = useState(JSON.parse( localStorage.getItem('access_token') ));
    const handleDelete = (id) => {
        const newData = data.filter(item => item.id !== id);
        seData(newData);
    }

    useEffect(async () => {
        const response = await axios.get(`${BASE_API_URL}/get-uploaded-images`,
          {headers:{
            'Authorization' : `Bearer ${access_token}`
          }}
        );
        const data_fetched = response.data;
        seData(data_fetched);
    }, []);


  return (
    <div className="home">
        {data && <GetData data={data} title="Pictures Requests" handleDelete={handleDelete} type='picture'/>}
    </div>
  );
}
 
export default Picture;