const wishlists = require('../models/wishlistSchema')



exports.addWishlist = async (req, res) => {
    console.log('inside the controller');
    const { id, title, price, images, rating } = req.body;
    const userId = req.payload; // Assuming userId is extracted from the request payload

    try {
        const existingProduct = await wishlists.findOne({ userId:id });

        if (existingProduct) {
            return res.status(400).json('Product already exists in wishlist');
        } else {
            // If the product doesn't exist, add it to the wishlist
            const newProduct = new wishlists({
                id, title, price, images, rating, userId
            });
            await newProduct.save();
            return res.status(201).json(newProduct); // Return the added product
        }
    } catch (err) {
        console.error('Error adding product to wishlist:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



exports.getWishlist= async(req,res)=>{

    const userId = req.payload

    try{
        const wishlistProduct  = await wishlists.find({userId})
    if(wishlistProduct){
        res.status(200).json(wishlistProduct)
    }
    else{
        res.status(400).json('product not found')
    }
    }
    catch(err){
        res.status(500).json(err)    }


}

exports.deleteFromWishlist = async(req,res)=>{
    const {id} = req.params


    try{

        const deletewishlist = await wishlists.findByIdAndDelete({_id:id})
        if(deletewishlist){
            const wishlistProduct  = await wishlists.find()
            res.status(200).json(wishlistProduct)
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}