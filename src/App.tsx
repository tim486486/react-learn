import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const title: string = 'Welcome to the new blogging platform!'
  const likes: number = 10
  // const person: { name: string; age: number } = { name: 'John', age: 25 }
  const link: string = 'https://vitejs.dev/guide/features.html'
  
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/create" element={<Create></Create>}></Route>
            <Route path="/blogs/:id" element={<BlogDetails></BlogDetails>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          {/* <h1>{title}</h1>
          <p>Liked {likes} times</p> */}
          {/* <p>{person}</p> */}
          {/* <p>{[1,2,3,4,5]}</p>
          <p>{Math.random()}</p>
          <a href={link}>Guide</a> */}
        </div>
      </div>
    </Router>
  )
} 

export default App