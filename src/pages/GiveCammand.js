import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { IoSend } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";


const GiveCammand = (props) => { 

    const {id ,b_id} = props;
    const [cammant , setcammant] = useState('');
    const navigate = useNavigate();

    const handlerChange = (e) => {
        setcammant(e.target.value);
    }

    const handelSubmit = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await axios.post(`http://localhost:8080/api/v1/blog/add-camment/${id}/${b_id}`,{ camment : cammant});
            if(data.success){
              
              
              alert("cammant saved successfully");
              navigate('/blog');
              window.location.reload();
            }
            
          }catch(error){
            console.log(error);
          };
    }
    
  return (
  
        
        <form onSubmit={handelSubmit}>
    <div>
       <div className='in'>
          
         
          <textarea type='text' name='cammantin' placeholder='cammant' value={cammant} onChange={handlerChange}></textarea>
          
          <button type='submit' ><IoSendSharp size={30}/></button>
          
        </div>
        
      
    </div>
    </form>
        
      
    
  )
}

export default GiveCammand
