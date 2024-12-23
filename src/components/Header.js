import React from "react";
import { Link } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux';
import { useNavigate  } from "react-router-dom";
import { authActions } from "../redux/store";
import {createBrowserHistory} from 'history'
import {Router} from 'react-router-dom'


const history = createBrowserHistory();


const Header = () =>{

    let isLogin = useSelector((state) => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerLogout = () => {
        try{
            dispatch(authActions.Logout())
            alert("logot successfully");
            
            localStorage.clear();
            sessionStorage.removeItem('userId')
            sessionStorage.removeItem('password')
            sessionStorage.removeItem('email')

            history.replaceState(null , null , window.location.href);
            

            history.pushState(null , null ,window.location.href);
            console.log(history);
            history.back();
            history.forward();
           // history.replace('/lodin')
            //navigate('/login');
           // history.push('/login')
           window.location.replace('/login')
        }catch(error){
            console.log(error)
        }
    }
    return(
       
        
        <div className="header">
            <div>
                <h2>MY Blog App</h2>
            </div>
            <div className="bl">
                {(!isLogin || isLogin) && <Link  to="/blog" className="blo">Blog</Link>}
                {isLogin && <Link to="/myblog" className="blo">My Blog</Link>}
                {isLogin && <Link to="/create-blog" className="blo">Create Blog</Link>}
            </div>
            <div>
                {!isLogin && <Link className="b1" to="/login">LOGIN</Link>}
                {!isLogin && <Link className="b1" to="/register">RIGISTER</Link>}
                {isLogin && <Link className="b1" to="/logout" onClick={handlerLogout}>LOGOUT</Link>}
            </div>

        </div>
       
    
    )
}

export default Header;