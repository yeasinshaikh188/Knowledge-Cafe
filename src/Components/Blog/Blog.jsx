import PropTypes from 'prop-types'; 
const Blog = ({blog}) => {
    console.log(blog)
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog; 
    return (
        <div>
            <img src={cover} alt={`cover pictur of the title ${title}`} />

            <div className='flex justify-between items-center'>

                <div className='flex space-x-3 items-center'>
                    <img className='w-14 rounded-[50%]' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold'>{author} </h2>
                        <p>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min red</span>
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
    blog: PropTypes.object.isRequired
}
export default Blog;