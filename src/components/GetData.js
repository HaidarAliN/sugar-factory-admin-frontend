const GetData = ({data, handleDelete, title}) => {
    return ( 
        <div className="blog-list blog-preview">
            <h2>{title}</h2>

            {data.map(blog => (
                <div className="blog-preview" key={blog.id} id={blog.id} >
                <p>Written by { blog.body }</p>
                <button onClick={() => handleDelete(blog.id)}>Approve</button>
                <button onClick={() => handleDelete(blog.id)}>Decline</button>
                </div>
            ))}
        </div>
     );
}
 
export default GetData;