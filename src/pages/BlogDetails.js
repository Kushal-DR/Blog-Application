import React,{useState ,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import toast from 'react-hot-toast';



const BlogDetails = () => {

    
        const [blog , setBlog] = useState({});
        const id = useParams().id;
        const [inputs , setinputs] = useState({});
    
        const getBlogDetails = async () => {
            try{
                const {data} = await axios.get(`http://localhost:8080/api/v1/blog/get-blog/${id}`);
                if(data?.success){
                    setBlog(data?.blog);
                    setinputs({
                        title : data?.blog?.title,
                        descrdescription :data?.blog?.description ,
                        image : data?.blog?.image
                    })
                }
                
            }catch(error){
                console.log(error);
            }
            console.log(blog);
        }
    
        useEffect(()=>{
            getBlogDetails();
        },[id])

        
          //const id = localStorage.getItem("userId")
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
              const {data} = await axios.put(`http://localhost:8080/api/v1/blog/update-blog/${id}`,{title : inputs.title , description : inputs.descrdescription , image : inputs.image});
              console.log("yu")
              if(data.success){
                alert("Blog Updated");
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
          <h2>Update Your Blog</h2>
          <label>Title</label>
          <input type='text' name='title' placeholder='title' value={inputs.title} onChange={handlerChange} required/>
          <label>Descrdescription</label>
          <input type='descrdescription' className='des' name='descrdescription' placeholder='descrdescription' value={inputs.descrdescription} onChange={handlerChange}  required/>
          <label>Image URL</label>
          <input type='text' name='image' placeholder='image' value={inputs.image} onChange={handlerChange}  required/>
          <button type='submit' >update</button>
          
        </div>
        
      
    </div>
    </form>
    </div>
  )
}

export default BlogDetails
