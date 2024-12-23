const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const colors =require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config()

const userRouter = require('./rotes/userRoutes');
const blogRouter = require('./rotes/blogRouter')
//mongo db connection
connectDB();

const app = express()

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user' , userRouter);
app.use('/api/v1/blog' , blogRouter);

app.get('/', function (req, res) {
  res.status(200).send('Hello World')
})

const PORT = process.env.PORT || 8080

app.listen(PORT , ()=>{
    console.log(`server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white)
})