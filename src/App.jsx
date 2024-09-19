import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
function App() {

  return (
    <>
    <Header></Header>
    <main className='md:flex'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    
    </>
  )
}

export default App
