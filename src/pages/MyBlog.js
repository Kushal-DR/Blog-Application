import React, {useState , useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard';


const MyBlog = () => {

  const [blogs , setblogs] = useState('');


  const getUserBlog = async () => {
    try{
      const id = localStorage.getItem("userId")
      const {data} = await axios.get(`http://localhost:8080/api/v1/blog/user-blog/${id}`);
      if(data?.success){
        setblogs(data?.userBlog?.blogs);
      }
      //console.log(blogs)

    }catch(error){
      console.log(error);
    }
  }

    useEffect(()=>{
      getUserBlog();
    } , [])
  
  return (
    <div className='blog'>
      {blogs && blogs.length > 0 ? (blogs.map((blog) => (
      <BlogCard 
       id = {blog._id}
       isUser = {true}
       title={blog.title}
       description = {blog.description}
       image = {blog.image}
       username = {blog.user.username}
       time = {blog.createdAt}
       />
      ))) : <h2 className='myBlog'>You Haven't Created Blog</h2>}
    </div>
  )
}

export default MyBlog
