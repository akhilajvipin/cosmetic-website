const Products = require('../models/productSchema');

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await  Products.find();
        res.status(200).json(allProducts);

    } catch (err) {
        console.error("Error while fetching products:", err);

        res.status(500).json({ error: "Failed to fetch products" });
    }
}


exports.getProduct = async(req,res)=>{
    const {id} = req.params

    try{
        getAproduct = await Products.findOne({id})
        res.status(200).json(getAproduct)
    }
    catch(err){
        res.status(404).json(err)
    }
}



