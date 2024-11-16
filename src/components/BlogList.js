import { Link } from "react-router-dom";
const BlogList = (props) => {
    const blogs = props.blogs
    return (  
        <div className="blog-list-container">
            <h2>{props.title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button><Link to={`/blogs/${blog.id}`} className="links_noPadding">See more...</Link></button>
            </div>
           ))}
        </div>
    );
}
 
export default BlogList;