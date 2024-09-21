import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 
const Blogs = ({handleAddToBookMark}) => {
    // console.log(handleAddToBookMark)
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
                Blogs.map((blog, idx) => <Blog 
                 key={idx} 
                  blog={blog}
                   handleAddToBookMark={handleAddToBookMark}
                   ></Blog>)
            }
         
        </div>
    );
};



Blogs.propTypes ={
    handleAddToBookMark: PropTypes.func.isRequired
}

export default Blogs;