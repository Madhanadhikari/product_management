const mongoose = require('mongoose');
const { type } = require('os');


const AdminSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,"email should not be empty"],
        unique:[true,"enter must be unique"],
        match: [
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    "Please enter a valid email address"
  ]
    },
    password:{
        type:String,
        required:[true,"password should not be empty"]
    }
});
const AdminModel=mongoose.model("admin",AdminSchema);
module.exports= AdminModel;