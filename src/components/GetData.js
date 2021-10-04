import { useState } from "react";
import axios from "axios";
import BASE_API_URL from '../services/BaseUrl';


const GetData = ({data, handleDelete, title, type}) => {
    
    const [access_token, setAccess_token] = useState(JSON.parse( localStorage.getItem('access_token') ));

    if(type == 'message'){

        const aprroveMessage = async (itemId) => {
            const response = await axios.post(`${BASE_API_URL}/approve-message`,{
                'id' : itemId
            },
                {headers:{
                    'Authorization' : `Bearer ${access_token}`
                }}
            );
            handleDelete(itemId);
        }

        const declineMessage = async (itemId) => {
            const response = await axios.post(`${BASE_API_URL}/decline-message`,{
                'id' : itemId
            },
                {headers:{
                    'Authorization' : `Bearer ${access_token}`
                }}
            );
            handleDelete(itemId);
        }

        return ( 
            <div className="blog-list blog-preview">
            <h2>{ Object.keys(data).length? title : 'Noting To show'}</h2>
            {data.map(item => (
                <div className="blog-preview" key={item.id} id={item.id} >
                <p><span style={{fontWeight: "bold"}}>Message: </span>{ item.body }</p>
                <br />
                <button style={{ 
                    color: 'white', 
                    backgroundColor: '#80DF72',
                    borderRadius: '8px' 
                }}
                onClick={() => aprroveMessage(item.id)}>Approve</button><span> </span>
                <button style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }} 
                onClick={() => declineMessage(item.id)}>Decline</button>
                </div>
            ))}
        </div>
     );
    }else{

        const aprroveImage = async (itemId) => {
            const response = await axios.post(`${BASE_API_URL}/approve-image`,{
                'id' : itemId
            },
                {headers:{
                    'Authorization' : `Bearer ${access_token}`
                }}
            );
            handleDelete(itemId);
        }

        const declineImage = async (itemId) => {
            const response = await axios.post(`${BASE_API_URL}/decline-image`,{
                'id' : itemId
            },
                {headers:{
                    'Authorization' : `Bearer ${access_token}`
                }}
            );
            handleDelete(itemId);
        }

        return ( 
            <div className="blog-list blog-preview">
            <h2>{ Object.keys(data).length? title : 'Noting To show'}</h2>
            {data.map(item => (
                <div className="blog-preview " key={item.id} id={item.id} >
                <span style={{fontWeight: "bold"}}>Image: </span><br />
                <img src={`http://127.0.0.1:8000${item.picture_url}`} height="200" width="200" /><br />
                <button style={{ 
                    color: 'white', 
                    backgroundColor: '#80DF72',
                    borderRadius: '8px' 
                }}  onClick={() => aprroveImage(item.id)}>Approve</button><span> </span>
                <button style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }} 
                onClick={() => declineImage(item.id)}>Decline</button>
                </div>
            ))}
        </div>
     );
    }
}
 
export default GetData;