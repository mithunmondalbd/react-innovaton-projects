import { BiSolidBookmarkAltPlus } from 'react-icons/bi';
import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtag} = blog;
    
    return (
            <div className="py-2 space-y-3">
                <img  src={cover} alt={`This is a title ${title}`} />
                <div className="flex justify-between">
                   <div className="flex space-x-4">
                        <img className="w-10 h-10 rounded-full border-2" src={author_img} alt="" />
                        <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                        </div>
                   </div>
                   <div className='space-x-3'>
                   <span>{reading_time} mins read</span>
                   <button onClick={() => handleAddToBookmark(blog)}><BiSolidBookmarkAltPlus></BiSolidBookmarkAltPlus></button>
                   </div>
                </div>
                <h2 className="text-2xl">{title}</h2>
               <p className='space-x-3'>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a href="" >{hash}</a></span>)
                }
               </p>

               <button onClick= {() => handleMarkAsRead(reading_time, id)} className='underline text-purple-500 font-sm'>Mark as read</button>
            </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
   
}

export default Blog;