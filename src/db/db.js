const mongoose = require("mongoose")


function connectToDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to db")
    }).catch((err)=>{
        console.log("mongoDB connection Error", err)
    })
}

module.exports = connectToDB