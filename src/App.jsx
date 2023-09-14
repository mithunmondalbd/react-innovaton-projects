
import './App.css'
import Header from './components/header/header';
import Blogs from './components/blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';
function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleMarkAsRead = (time, id) =>{
    setReadingTime(readingTime + time);

    // remove the blog button 
    const remainingTime = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookmarks(remainingTime);
  }

  const handleAddToBookmark = (blog) =>{
   const newBookmarks = [...bookMarks, blog]
   setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto space-x-2'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
      <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
