 const mongoose = require('mongoose')

 const cartSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        // unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    quantity:{
        type:Number,
        required:true,
    },
    grandtotal:{
        type:Number,
    },
    userId:{
        type:String,
        required:true,
    },
    
    
   
    
    

 })

 const carts = mongoose.model('carts',cartSchema)
 module.exports=carts

