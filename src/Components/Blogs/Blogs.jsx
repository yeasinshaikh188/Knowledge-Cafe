import { useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = () => {
    // const [Blogs, setBlogs] = useState([])
    const [Blogs, setBlogs] = useState([])


    // load data 
    fetch("blog.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
    return (
        <div className="w-2/3">
            <h1>Blogs : {Blogs.length} </h1>
            {
                Blogs.map(blog => <Blog blog={blog}></Blog>)
            }
         
        </div>
    );
};

export default Blogs;