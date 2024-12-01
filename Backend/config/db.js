const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Connected to db')
    })
    .catch(()=>{
        console.log('Connection failed')
    })
}

module.exports = connectDB;