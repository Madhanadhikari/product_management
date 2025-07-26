const mongoose = require('mongoose');

const ConnectDB=()=>{
    mongoose.connect("mongodb+srv://madhan:1705@cluster0.vjwltao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") .then(() => {
        console.log("Db connected");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports = ConnectDB;