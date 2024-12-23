import React,{useState , useEffect} from 'react';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

const Blog = () => {

  const [blogs , setblogs] = useState('');
  

  const getAllBlogs = async ()=>{
    try{
     
       const {data} = await axios.get('http://localhost:8080/api/v1/blog/all-blog');
      
      
      
      console.log(data);
      if(data?.success){
        setblogs(data?.blogs)
      }
      
    }catch(error){
      console.log(error)
    }  
  }
  //console.log(cammend[0].camment)
//console.log(camment_data);
  useEffect(()=>{
    getAllBlogs();
  },[])
  return (
    <div className='bl0g'>
     {blogs && blogs.map((blog) => (
      <BlogCard 
       id = {blog._id}
       isUser={localStorage.getItem("userId") === blog.user._id}
       title={blog.title}
       description = {blog.description}
       image = {blog.image}
       username = {blog.user.username}
       time = {blog.createdAt}
       user_id = {blog.user._id}
      
       />
       
      ))}
      
    </div>
    
    
  )
}

export default Blog
