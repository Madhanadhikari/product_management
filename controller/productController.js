const productModel = require('../model/productModel');
const dashboard=async(req,resp)=>{
    if (!req.session.name) {
        resp.redirect("/login");
    }else{
        const data=await productModel.find();
    resp.render("dashboard",{errors:{},old:{},data:data,name:req.session.name});
    }
}

const productadd=async(req,resp)=>{
    try {
        const {productname,category,price,quantity,description}=req.body;
        const product=productname.toUpperCase();
    await productModel.create({productname:product,category,price,quantity,description});
      
    resp.redirect("/dashboard");
    } catch (error) {
        let errors={};
        if (error.name==="ValidationError") {
            for (let field in error.errors) {
                errors[field]=error.errors[field].message;
            }
            
        }
        const data=await productModel.find();
        resp.render("dashboard",{errors,old:req.body,name:req.session.name,data:data});
    }
}

const search=async(req,resp)=>{
   if (!req.session.name) {
    resp.redirect("/login");
   }else{
     try {
        const search=req.body.search.toUpperCase();
         const data = await productModel.find({productname: { $regex: search, $options: 'i' } });
        
        if (data) {
            resp.render("dashboard",{errors:{},old:req.body,name:req.session.name,data:data});
        } else {
             resp.render("dashboard",{errors:{},old:req.body,name:req.session.name,data:data});
        } 
    } catch (error) {
        console.log(error);
        
    }
}


   }

module.exports={dashboard,productadd,search};