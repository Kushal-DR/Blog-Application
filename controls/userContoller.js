const userModel = require('../models/usermodel');
const bcrypt = require("bcrypt");

//grt all users
exports.getAllUsers = async (req , res) => {
    try{
        const users = await userModel.find({});
        return res.status(200).send({
            userCount : users.length,
            success:true,
            message:"all users data",
            users,
        });
    }catch(error){
        console.log(error);
        return res.status(500).send({
            message : "error in get all user",
            success:false,
            error
           
        })
    }
};

//create user register user
exports.registerController =async (req , res) => {
    try{
        const {username , email , password} = req.body;
        //validation
        if(!username || !email || !password){
            return res.status(401).send({
                message : "please fill all fields",
                success:false,
                
            })
        }

        //existing user
        const existingUser = await userModel.findOne({email})
       
        if(existingUser){
            return res.status(401).send({
                message : "user already exists",
                success:false,
               
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10);
        
        //save new user
        const user = new userModel({username , email ,password : hashedPassword});
        await user.save()
        return res.status(201).send({
    success:true,
    message : "New User Created",
    user,
        })    
    }catch(error){
            console.log(error);
            return res.status(500).send({
                message : "error in register callback",
                success:false,
                error:error.message,
            })
    }
};

//login
exports.loginController = async (req , res) => {
    try{
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(401).send({
                message : "please provide email or password ",
                success:false,
        })}

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(401).send({
                message : "email is not registered",
                success:false,
        })}

        const isMatch = await bcrypt.compare(password ,user.password);
        if(!isMatch){
            return res.status(401).send({
                message : "invalid user or password",
                success:false,
        })
        }
        return  res.status(201).send({
            message : "login success",
            success:true,
            user,
    })
        }
    

    catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"error in login callback",
            error
        })
    }
    

    
};
