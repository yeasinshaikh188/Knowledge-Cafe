import { useState } from "react";


const Blogs = () => {
    const [Blogs, setBlogs] = useState([])


    // load data 
    fetch("blog.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
    return (
        <div>
            
        </div>
    );
};

export default Blogs;