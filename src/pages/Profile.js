import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { CgProfile } from "react-icons/cg";


const Profile = () => {
    const [blogs , setblogs] = useState([]);
    const [user , setuser] = useState('');
    const id = useParams().id;
    console.log(id);

    const getUserBlog = async () => {
        try{
          
          var {data} = await axios.get(`http://localhost:8080/api/v1/blog/user-blog/${id}`);
          if(data?.success){
            setblogs(data?.userBlog?.blogs);
            setuser(data?.userBlog?.username)
          }
          console.log(blogs)
    
        }catch(error){
          console.log(error);
        }
      }
    
        useEffect(()=>{
          getUserBlog();
        } , [])



  return (

    <div className='blog'>
      <div className='pro1'>
        <CgProfile size={40} className='i1'/>
        <h3 className='use'>{user}</h3>
      </div>
        <hr/>
      {blogs.map((blog) => (
      <BlogCard 
       id = {blog._id}
       isUser = {false}
       title={blog.title}
       description = {blog.description}
       image = {blog.image}
       username = {blog.user.username}
       time = {blog.createdAt}
       />
      ))}
    </div>
      
    
  )
}

export default Profile
