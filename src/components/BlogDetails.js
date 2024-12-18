import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
// import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)
    // const history = useHistory()
    const navigate = useNavigate()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            // history.push('/')
            navigate('/')
        })
    }

    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="container">{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;