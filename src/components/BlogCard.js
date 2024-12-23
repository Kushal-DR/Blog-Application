import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { AiFillMessage } from "react-icons/ai";
import GiveCammand from '../pages/GiveCammand';
import CammentCard from '../pages/CammentCard';

//import { Command } from 'concurrently';


const BlogCard = (props) => {

  const [value , setvalue] = useState('false');
  const [cammend , setcammend] = useState('')

  const {id , isUser ,title , description ,image , username , time , user_id} = props;
  console.log(user_id);
  const useid = localStorage.getItem("userId")
  const time1 = time.toDateString;
  //console.log(time1);
  const navigate = useNavigate();

  const handleEdit = ()=>{
    navigate(`/blog-details/${id}`)
  }

  const handleDelete = async () => {
    try{
      const {data} = await axios.delete(`http://localhost:8080/api/v1/blog/delete-blog/${id}`);
      if(data.success){
        alert("blog deleted")
        window.location.reload();
      }
    }catch(error){
      console.log(error)
    }
  }

  const getuserdata = async () => {
    navigate(`/individule-blog/${user_id}`)
  }

    const handleCamment = ()=>{
      setvalue((prevalue) => !prevalue);
    }

    const getCamment = async() => {
      const {data} = await axios.get(`http://localhost:8080/api/v1/blog/get-camment/${id}`);
      if(data?.success){
        setcammend(data?.camment_data);
        
      }
    }
    useEffect(()=>{
      getCamment();
    },[])
  console.log(cammend);

  return (
   
    <div className='blog'>
       {isUser && (<div className='edit'>
        <CiEdit size={30} onClick={handleEdit}/>
        <AiFillDelete className="mr-3" onClick={handleDelete} size={30}/>
       </div>)}
      <div className='user'>
        <p onClick={()=>{getuserdata()}}>{username}</p>
        <time>{time}</time>
      </div>
      <div className='title'>
        <h3>{title}</h3>      
      </div>
      <div className='image'>
        <img src={image}></img>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <hr></hr>
      <div>
        < AiFillMessage size={35} className='cam-icon' onClick={handleCamment}/>
        {value && (cammend.length > 0 ? cammend.map((data)=>(<div className='cam'><p className='Cp1'>{data.sendUser.username}</p><p className='Cp2'>{data.camment}</p></div>)) : <h3 className='noC'>No camment</h3>)}
        {value && <GiveCammand id={useid} b_id={id}/>}
      </div>
    </div>
  )
}

export default BlogCard
