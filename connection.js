const mongoose = require('mongoose');

const ConnectDB = async()=>{
    await mongoose.connect("mongodb+srv://sabrin:123@cluster0.05zo9.mongodb.net/myexpress?retryWrites=true&w=majority")
}

module.exports = ConnectDB;