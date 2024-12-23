import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const [inputs , setinputs] = useState({
    username : '',
    email : '',
    password : ''
  })
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
      const {data} = await axios.post('http://localhost:8080/api/v1/user/register',{username : inputs.username , email : inputs.email , password : inputs.password});
      if(data.success){
        alert("user Register successfully");
        navigate('/login');
      }
    }catch(error){
      console.log(error);
    };
    
    
  }
  return (
    <form onSubmit={handelSubmit}>
    <div>
       <div className='box'>
          <h2>register</h2>
          <input type='text' name='username' placeholder='username' value={inputs.username} onChange={handlerChange}/>
          <input type='email' name='email' placeholder='email' value={inputs.email} onChange={handlerChange}/>
          <input type='password' name='password' placeholder='password' value={inputs.password} onChange={handlerChange}/>
          <button type='submit' >submit</button>
          <button onClick={()=>navigate('/login')} className='submit'>already registerd ? please login </button>
        </div>
        
      
    </div>
    </form>
  )
}

export default Register
