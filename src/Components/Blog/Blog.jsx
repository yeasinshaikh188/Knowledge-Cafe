import PropTypes from 'prop-types'; 

import { FaBookmark  } from 'react-icons/fa';


const Blog = ({blog, handleAddToBookMark}) => {
    // console.log(handleAddToBookMark)
    // console.log(blog)
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog; 
    return (
        <div className='mb-20 space-y-8'>
            <img className='w-full' src={cover} alt={`cover pictur of the title ${title}`} />

            <div className='flex justify-between items-center'>

                <div className='flex space-x-3 items-center'>
                    <img className='w-14 rounded-[50%]' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold'>{author} </h2>
                        <p>{posted_date} </p>
                    </div>
                </div>
                <div  className='space-x-3 flex items-center'>
                    <span>{reading_time} min red</span>
                    <button onClick={() =>handleAddToBookMark()} className='text-3xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">Title: {title}</h2>
           <p>
            {
                hashtags.map((hash, idx) => <span key={idx} className='m-2'><a href="">{hash}</a></span>)
            }
           </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired
}
export default Blog;