const moongoose  =  require('mongoose')

const wishlistSchema =  new moongoose.Schema({
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
    rating: {
        type: {
            value: Number,
            reviewer: String,
            date: String,
            review: String,
            count: Number 
        },
        required: true
    },
    userId:{
        type:String,
        required:true,
    },

})

const wishlists = moongoose.model('wishlists',wishlistSchema)
module.exports = wishlists