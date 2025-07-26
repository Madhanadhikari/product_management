
const AdminModel = require('../model/adminModel');
const bcrypt = require('bcryptjs');
const regisform=(req,resp)=>{
    resp.render("register",{errors:{},old:{}});
}

const register=async(req,resp)=>{
    try {
        const{email,password}=req.body;
        const hashpass=await bcrypt.hash(password,10);
        await AdminModel.create({email,password:hashpass});
        resp.redirect("/login");
    } catch (error) {
        let errors={};
        if(error.name ==="ValidationError"){
            for(let field in error.errors){
                errors[field]=error.errors[field].message;
            }
        }
        return resp.render("register",{errors,old:req.body}

        )
        
    }
}

const log=(req,resp)=>{
    resp.render("login",{errors:{},old:{}});
}

const login=async(req,resp)=>{
    try {
        const{email,password}=req.body;
        const data=await AdminModel.findOne({email});
        if (data && await bcrypt.compare(password,data.password)) {
            req.session.name=email;
            resp.redirect("/dashboard");
        }else {
            const errors = { email: "Invalid email or password" };
            return resp.render("login", { errors, old: req.body });
        }
        
        
    } catch (error) {
       console.log(error);
       
        
    }
}

const dashboardload=async(req,resp)=>{
    
    resp.render("dashboard",{errors:{},old:{}});
}


module.exports={regisform,register,log,login,dashboardload};