const options = require('../models/optionSchema')


exports.suggestions  = async(req,res)=>{
    console.log('inside');

    try {
        const { email, suggestion } = req.body;
        const newOption = new options({ email, suggestion });
        const savedOption = await newOption.save();
        res.status(201).json(savedOption);
      } catch (error) {
        res.status(500).json({ message: 'Error creating option', error });
      }
    }

