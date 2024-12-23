const mongoose = require("mongoose");

const cammentSchema = new mongoose.Schema({
    camment:{
        type:String,
        required:true
    },
    sendUser:{
        type : mongoose.Types.ObjectId,
        ref : 'User',
        
    },
    blogId:{
        type : mongoose.Types.ObjectId,
        ref : 'Blog',
    }

},
{
    timestamps:true
})

const userCamment = mongoose.model("Camment" , cammentSchema);

module.exports = userCamment;