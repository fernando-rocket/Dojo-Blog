import { useState } from "react";
// import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mario")
    const [blog_added, setBlogAdded] = useState(false)
    // const history = useHistory()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setBlogAdded(true)
            setTimeout(()=>{
                setBlogAdded(false)
            }, 2000)
            // history.go(-1)
            // history.push('/')
            navigate('/')
        })
    }

    return (  
        <div className="create container">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => {setAuthor(e.target.value)}}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!blog_added && <button>Add Blog</button>}
                <p>{title} {body} {author}</p>
            </form>
            {blog_added && <div className="blog-added-sucess">Blog Added...</div>}
        </div>
    );
}
 
export default Create;