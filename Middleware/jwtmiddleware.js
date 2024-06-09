const jwt = require('jsonwebtoken')

const jwtmiddleware = (req,res,next)=>{
    try{
        const token = req.headers['authorization'].split(' ')[1]

        console.log(token);

        const jwtResponse = jwt.verify(token,process.env.JWTKEY)
        
        req.payload = jwtResponse.userId
        next()
    }
    catch(err){
        res.status(402).json('Autherization failed')
    }

}
module.exports = jwtmiddleware