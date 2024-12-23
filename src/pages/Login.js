import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {authActions} from '../redux/store';
//"proxy":"http://localhost:8080",
const Login = () => {

  const dispatch = useDispatch();
  const [inputs , setinputs] = useState({
    
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
      const {data} = await axios.post('http://localhost:8080/api/v1/user/login',{ email : inputs.email , password : inputs.password});
      if(data.success){
        localStorage.setItem("userId" , data?.user._id)
        dispatch(authActions.login())
        alert("login sucessfully");
        navigate('/blog');
      }
      else{
        alert("-")
      }
    }catch(error){
      console.log(error);
    };
    
    
  }
  return (
    <form onSubmit={handelSubmit}>
    <div>
       <div className='box'>
          <h2>login</h2>
         
          <input type='email' name='email' placeholder='email' value={inputs.email} onChange={handlerChange}/>
          <input type='password' name='password' placeholder='password' value={inputs.password} onChange={handlerChange}/>
          <button type='submit' >login</button>
          <button onClick={()=>navigate('/register')} className='submit'>not registerd ? please register </button>
        </div>
        
      
    </div>
    </form>
  )
}

export default Login
