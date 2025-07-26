const express = require('express');
const adminCotroller = require('../controller/adminController');
const productCotroller = require('../controller/productController');
const productModel = require('../model/productModel');

const AdminRoute=express.Router();

AdminRoute.get("/",adminCotroller.regisform);
AdminRoute.post("/register",adminCotroller.register);
AdminRoute.get("/login",adminCotroller.log);
AdminRoute.get("/edit/:id",async(req,resp)=>{
    const data=await productModel.findOne({_id:req.params.id});
    resp.render("edit",{data:data});
})
AdminRoute.patch("/update/:id",async(req,resp)=>{
    const data= await productModel.findByIdAndUpdate({_id:req.params.id},req.body);
    resp.redirect("/dashboard");
})
AdminRoute.post("/login",adminCotroller.login);
AdminRoute.get("/dashboard",productCotroller.dashboard);
AdminRoute.post("/add",productCotroller.productadd);
AdminRoute.post("/search",productCotroller.search);

AdminRoute.delete("/delete/:id",async(req,resp)=>{
  await productModel.deleteOne({_id:req.params.id});
  resp.redirect("/dashboard");
})
AdminRoute.get("/logout",(req,resp)=>{
    req.session.destroy();
    resp.redirect("/login");
})


module.exports={AdminRoute};