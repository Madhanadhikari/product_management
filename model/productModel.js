const mongoose = require('mongoose');


const productSchema=mongoose.Schema({
    productname:{
  type:String,
  required:[true,"productname requiered"]
    },
    category:{
        type:String,
        required:[true,"enter category"]
    },
   price:{
    type:Number,
    required:[true,"price is required"],
    min:[1,"price sholud be in positive"],
   }
,quantity:{
    type:Number,
    required:[true,"qauntity is required"],
    min:[1,"price sholud be in positive"],
   }
   ,
   description:{
    type:String
   }
})

const productModel=mongoose.model("product",productSchema);
module.exports=productModel;


