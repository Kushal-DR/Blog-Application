# 📝 Blog Application - MERN Stack

A full-stack **Blog Application** built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This app allows users to create, read, update, and delete blog posts, with user authentication and responsive UI.

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- 📝 Create, Read, Update, Delete (CRUD) Blogs
- 🧑‍💻 User-specific blog management
- 📅 Blog timestamps and author tags
- 🔍 Responsive UI built with React
- 🌐 RESTful API backend

## 🛠️ Tech Stack

### Frontend:
- ReactJS
- Axios
- React Router
- CSS / Tailwind (optional)

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js for password hashing

## 📁 Folder Structure


blog-app/
├── client/               # React Frontend
│   ├── src/
│   │   ├── components/   # UI Components
│   │   ├── pages/        # Page-level components
│   │   └── App.js
│   └── package.json

├── server/               # Express Backend
│   ├── controllers/      # Logic for routes
│   ├── models/           # Mongoose Schemas
│   ├── routes/           # API Endpoints
│   ├── middleware/       # Auth middleware
│   ├── config/           # DB Config
│   └── index.js
├── .env
└── README.md


🔐 API Endpoints      
Auth   
POST /api/auth/register – Register a new user     
POST /api/auth/login – Login and receive JWT token    

Blogs    
POST /api/blogs/ – Create blog (auth required)      
GET /api/blogs/ – Get all blogs    
GET /api/blogs/:id – Get single blog by ID          
PUT /api/blogs/:id – Update blog (auth & owner only)           
DELETE /api/blogs/:id – Delete blog (auth & owner only)            

🧑‍💻 Getting Started           
Prerequisites      
Node.js     
MongoDB (local or Atlas)      

Installation       

git clone https://github.com/yourusername/blog-mern-app.git
cd blog-mern-app

Backend Setup

cd server     
npm install    

# Create a .env file in /server with the following:  
MONGO_URI=your_mongo_connection_string      
JWT_SECRET=your_jwt_secret   
PORT=5000 

npm start


Frontend Setup  

cd client 
npm install   
npm start  

To run both at once   
npm run start

