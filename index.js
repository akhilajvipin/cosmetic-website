
require('dotenv').config()

const express = require('express')

const cors = require('cors')

const ecartServer = express()

ecartServer.use(cors())

const db = require('./db')
const router = require('./Route/routes')

ecartServer.use(express.json())

ecartServer.use(router)

const PORT = 3000|| process.env.PORT

ecartServer.listen(PORT,()=>{
    console.log('Listening on the port '+PORT);

})
ecartServer.get('/',(req,res)=>{
    res.send('e cart sever stared');
})