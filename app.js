const express = require('express');
const ConnectDB = require('./db/db');
const session = require('express-session');
const method = require('method-override');
const { AdminRoute } = require('./route/route');



const app=express();
ConnectDB();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"product",
    saveUninitialized:false,
    resave:false
}));
app.use(method("_method"));
app.use('/',AdminRoute);


app.listen(4000,()=>{
    console.log("server running...");
    
})