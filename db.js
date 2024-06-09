const mongoose = require('mongoose')

const connectionString = process.env.DATA_BASE

mongoose.connect(connectionString).then((res)=>{
    console.log('db.connection Established')
}).catch((err)=>{
    console.log(err);
})