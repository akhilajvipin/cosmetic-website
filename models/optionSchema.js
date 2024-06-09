const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({

    email:{
        type:String,
        require:true
    },
    suggestion:{
        type:String,
        require:true
    }
    
})
const options = mongoose.model('options',optionSchema)
module.exports=options
