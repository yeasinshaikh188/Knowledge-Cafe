import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import { useState } from 'react'

function App() {
const [bookmarks, setBookmarks] = useState([]);
const handleAddToBookMark = bloog =>{
  console.log('handle Add soon')
}
  return (
    <div className='max-w-7xl mx-auto'>
    <Header></Header>
    <main className='md:flex'>
    <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    
    </div>
  )
}


export default App
