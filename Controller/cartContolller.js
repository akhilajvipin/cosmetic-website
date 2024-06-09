const carts = require('../models/cartSchema')


exports.addtocart = async(req,res)=>{
    
    const {id,title,price,images,rating, quantity} = req.body

    const userId = req.payload

    try{
     const cartitem = await carts.findOne({id,userId})

     if(cartitem){
        cartitem.quantity+=1
        cartitem.grandtotal= cartitem.quantity*cartitem.price
        await cartitem.save()
        res.status(200).json("product updated succesfully")
        
     }
     else{
        const cartNewproduct = new carts({id,title,price,images,rating, quantity,grandtotal:price,userId})
        await cartNewproduct.save()
        res.status(200).json(cartNewproduct)

     }
    }
    catch(err){
        res.status(404).json(err)
    }
}

exports.getCart= async(req,res)=>{
    const userId = req.payload

    try{
        const allCartproduct = await carts.find({userId})
        res.status(200).json(allCartproduct)
    }
    catch(err){
        res.status(404).json(err)
    }

}

exports.deletecart = async(req,res)=>{
    const {id} = req.params
    try{
       await carts.deleteOne({_id:id})
       res.status(200).json('Removed the item')

    }
    catch(err){
        res.status(500).json(err)
    }

}

exports.incrementCart= async(req,res)=>{
    const {id} = req.params
    try{
        const incrementCartProduct = await carts.findOne({_id:id})

        if(incrementCartProduct){
            //qnty increment
            incrementCartProduct.quantity+=1
            incrementCartProduct.grandtotal= incrementCartProduct.
            price*incrementCartProduct.quantity
            //if updated save into mongodb qnty price
            await incrementCartProduct.save()
            //get frnt end
            const allCartproduct = await carts.find()
            res.status(200).json(allCartproduct)
        }
        else{
            res.status(402).json("Item not found")
        }

    }
    catch(err){
        res.status(400).json(err)
    }
}

exports.decrementCart= async(req,res)=>{
    const {id} = req.params
    try{
        const decrementCartProduct = await carts.findOne({_id:id})

        if(decrementCartProduct){
            decrementCartProduct.quantity-=1
            if(decrementCartProduct.quantity==0){
                await carts.deleteOne({_id:id})
                res.status(200).json("Item removed cart")
            }
            else{
                decrementCartProduct.grandtotal= decrementCartProduct.quantity*decrementCartProduct.price
            await decrementCartProduct.save()
            res.status(200).json(decrementCartProduct)
            }      
        }
        else{
            res.status(402).json("item not found")
        }
    }
    catch(err){
        res.status(400).json(err)
    }
}


