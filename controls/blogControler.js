const mongoose  = require("mongoose");
const blogModel = require("../models/blogmodel");
const userModel = require("../models/usermodel");
const userCamment = require("../models/comment");

exports.getAllBlogsController = async (req , res)=>{
    try{
        const blogs = await blogModel.find({}).populate("user");
        
        if(!blogs){
            return res.status(200).send({
                success : false,
                message : `No Blog Found`,
                
            })
        }

        return res.status(200).send({
            success : true,
            BlogCount : blogs.length,
            message : "All blog list",
            blogs
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success : false,
            message : `error while getting blog`,
            error,
        })
    }
};

exports.createBlogcontroller =async (req , res) => {
    try{
        const {title , description , image , user} = req.body;

        if(!title || !description || !image || !user){
            return res.status(401).send({
                success : false,
                message : `please enter all fields`,
            })
        }
        console.log("1");
        const existingUser = await userModel.findById(user);
        if(!user){
            return res.status(401).send({
                success : false,
                message : `unable to update`,
            })
        }
        console.log("2");
        const newblog = new blogModel({title , description , image ,user});
        const session = await mongoose.startSession();
        console.log("3");
        session.startTransaction();
        console.log("4");
        await newblog.save();
        console.log("5");
        await existingUser.blogs.push(newblog);
        console.log("6");
        await existingUser.save();
        console.log("7");
        await session.commitTransaction();
        await newblog.save();
        return res.status(200).send({
            success : true,
            message : "blog  created",
            newblog,
        })

    }catch(error){
        console.log(error);
        return res.status(500).send({
            success : false,
            message : `error in creating blog`,
            error 
        })
    }
};

exports.updateBlogcontroller =async (req , res) => {
    try{
        const {id} = req.params;
        const {title , description , image} = req.body;
        console.log("1")
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Blog ID" });
        }
        console.log("2")
        
        const upblog = await blogModel.findByIdAndUpdate(id , {$set :{...req.body}} ,{ new : true});
        console.log("1")
        

        return res.status(200).send({
            success : true,
            message : "blog  updated",
            upblog,
        })
        
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success : false,
            message : `error in updating blog`,
            error 
        })
    }
};

exports.getBlogByIdBlogcontroller = async (req , res) => {
    try{
        const {id} = req.params;
        const blog = await blogModel.findById(id).populate("user");
        //console.log(blog);
        if(!blog){
            return res.status(500).send({
                success : false,
                message : `blog not found with this id`,
                error ,
            }) 
        }
        return res.status(200).send({
            success : true,
            message : "fetch single blog",
            blog,
        })

    }catch(error){
        return res.status(500).send({
            success : false,
            message : `error in get single blog`,
            error 
        }) 
    }
};

exports.deleteBlogController = async (req , res) => {
    try{
        const {id} = req.params;

        const blog = await blogModel.findByIdAndDelete(id).populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
        return res.status(200).send({
            success : true,
            message : "blog deleted",
           
        })
    }catch(error){
        return res.status(500).send({
            success : false,
            message : `error in delete a blog blog`,
            error 
        }) 
    }
};

exports.userBlogController = async(req , res) => {
    try{
        console.log(req.params.id);
        const id = req.params.id;
        const userBlog = await userModel.findById(id).populate("blogs");
        //console.log(userBlog)
        if(!userBlog){
            return res.status(401).send({
                success : false,
                message : `Blog not found with this id`,
            })
        }

        return res.status(200).send({
            success : true,
            message : "user blogs",
            userBlog,
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success : false,
            message : `error in get user blog`,
            error 
        })
    }
}

exports.AddCamment = async (req , res) => {
    try{
        const {id , b_id} = req.params;
        const {camment} = req.body;

        if(!id || !b_id || !camment){
            return res.status(200).send({
                success : false,
                message : `No camment Found`,
        })
        }
        console.log(camment)
        const camment_data = new userCamment({camment:camment , sendUser:id , blogId:b_id});
        await camment_data.save();
        console.log(camment_data);

        return res.status(200).send({
            success : true,
            message : "camment created",
            camment_data,
        })
        


    }catch(error){
        console.log(error);
        return res.status(500).send({
            success : false,
            message : `error in creating cammand`,
            error 
        })
    }
}

exports.getCamment = async (req , res) => {
    try{
        const {id} = req.params;
        if(!id){
            return res.status(500).send({
                success : false,
                message : `id is not defined`,
        })
        }

        const camment_data = await userCamment.find({blogId:id}).populate("sendUser");
        
        return res.status(200).send({
            success : true,
            message : "camments",
            camment_data,
        })


    }catch(error){
        return res.status(500).send({
            success : false,
            message : `error in get cammand`,
            error 
        })
    }
}