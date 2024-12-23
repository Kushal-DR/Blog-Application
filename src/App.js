import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Route , Routes} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Blog from './pages/Blog';
import MyBlog from './pages/MyBlog';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './pages/BlogDetails';
import Profile from './pages/Profile';
//import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    
    <Header/>
    <Routes>
      
      <Route path="/" element={<Blog/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/myblog" element={<MyBlog/>}/>
      <Route path="/blog-details/:id" element={<BlogDetails/>}/>
      <Route path="/individule-blog/:id" element={<Profile/>}/>
      
      <Route path="/create-blog" element={<CreateBlog/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
 
    
  );
}

export default App;
