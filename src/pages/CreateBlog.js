import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const CreateBlog = () => {

    const [inputs , setinputs] = useState({
        title : '',
        descrdescription : '',
        image : ''
        
      });
      const id = localStorage.getItem("userId")
      const navigate = useNavigate();
      const handlerChange =(e)=>{
        setinputs((prevState) => ({
          ...prevState,
          [e.target.name] : e.target.value,
        }))
      };

      const handelSubmit = async (e) => {
        e.preventDefault();
        try{
          const {data} = await axios.post('http://localhost:8080/api/v1/blog/create-blog',{title : inputs.title , description : inputs.descrdescription , image : inputs.image , user : id});
          if(data.success){
            alert("Blog Created");
            navigate('/myblog');
          }
         console.log(inputs)
        }catch(error){
          console.log(error);
        };
    }

  return (
    <div>
    <form onSubmit={handelSubmit}>
    <div>
       <div className='box'>
          <h2>Create Blog</h2>
          <label>Title</label>
          <input type='text' name='title' placeholder='title' value={inputs.title} onChange={handlerChange} required/>
          <label>Descrdescription</label>
          <textarea type='descrdescription' className='des' name='descrdescription' placeholder='descrdescription' value={inputs.descrdescription} onChange={handlerChange}  required></textarea>
          <label>Image URL</label>
          <input type='text' name='image' placeholder='image' value={inputs.image} onChange={handlerChange}  />
          <button type='submit' >submit</button>
          
        </div>
        
      
    </div>
    </form>
    </div>
  )
}


export default CreateBlog
