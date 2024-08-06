import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

  // to start json server: npx json-server --watch data/db.json --port 8000

const Home = () => {
  // const [blogs, setBlogs] = useState([
  //   {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
  //   {title: 'Learn typescript', body: 'lorem ipsum...', author: 'luigi', id: 2},
  //   {title: 'Learn react', body: 'lorem ipsum...', author: 'mario', id: 3}
  // ])
  // const [blogs, setBlogs] = useState([] as { 
  //   title: string; 
  //   body: string; 
  //   author: string; 
  //   id: number }[]);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null)

  // const [name, setName] = useState('mario');

  // const handleDelete = (id: number) => {
  //   if (blogs !== null){
  //     const newBlogs = blogs.filter(blog => blog.id !== id)
  //     setBlogs(newBlogs)
  //   }    
  // }

  const handleDelete = (id: number) => {
    //dummy
  }

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && blogs.length > 0 && <BlogList blogs = {blogs} title="All Blogs" handleDelete={handleDelete}></BlogList>}
      {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"></BlogList> */}
      {/* <button onClick={() => setName('luigi')}> change name </button> */}
      {/* <p>{name}</p> */}
    </div>
  );
}
//Buttons:

// const Home = () => {
//   // let name: string = 'Tim'
//   const [name, setName] = useState('Tim')
//   const [age, setAge] = useState(38)
  
//   const handleClick = (e: any) => {
//     console.log('helloworld', e)
//     setName('Ethan')
//     setAge(1)
//   }
//   const handleClickAgain = (name: string, e: any) => {
//     console.log('hello ' + name, e)
//   }
//   console.log('helloworld')
//   return(
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{name} is {age} years old</p>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={(e: any) => handleClickAgain('mario', e)}>Click me again</button>
//     </div>
//   )
// }

export default Home