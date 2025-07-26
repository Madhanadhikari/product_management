const mongoose = require('mongoose');

const ConnectDB=()=>{
    mongoose.connect("") .then(() => {
        console.log("Db connected");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports = ConnectDB;
