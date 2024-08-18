import mongoose from "mongoose";

let userScheme = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        required:true
    }
},
{timestamps:true});

let User = mongoose.model("User", userScheme);

export default User;