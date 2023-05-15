const express = require ('express')
const path = require('path')
const studentRouter = require('./Routers/StudentRouter')

const server = express()

const PORT  = process.env.PORT || 9898
const BASE_URL = process.env.BASE_URL


// static path
server.use(express.static(path.join(__dirname,"./Client/build")))

server.get("*", function(req,res){
    res.sendFile(path.join(__dirname,'./Client/build/index.html'))
})

server.use(express.json())

server.get('/',(request,response)=>{
    response.send('Blog app runing')
})

server.use('/blog', studentRouter)

server.listen(PORT,()=>{
    console.log('server runing : BASE_URL')
})