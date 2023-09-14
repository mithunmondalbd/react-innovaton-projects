
import PropTypes from 'prop-types';
import BookMark from '../bookmark/BookMark';

const Bookmarks = ({bookMarks, readingTime}) => {
    return (
        <div className="md:w-1/3 text-center bg-slate-200 ">
            <h3 className=' py-2 text-xl font-bold'>Total Reading time: {readingTime}</h3>
            <h2 className='text-2xl font-bold py-3 border-b-2 border-b-gray-950'>Bookmarks length: {bookMarks.length}</h2>
            {
                bookMarks.map((bookmark, idx) => <BookMark key= {idx} bookmark= {bookmark} readingTime={readingTime}></BookMark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;