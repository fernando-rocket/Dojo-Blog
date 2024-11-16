import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="ALL BLOGS"/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author.includes("mario") || blog.title.includes("mario"))} title="MARIO BLOGS"/>}
        </div>
    )
}

// npx json-server --watch data/db.json --port 8000

export default Home;

