const express = require('express')

const router = express.Router()

const {Blog} = require('../models/index')

router.post('/send',async (request,response)=>{
         var reqData = request.body;
       const studObj = await Blog.create(reqData)
       response.json({status:true,data:studObj})
})

router.get('/save',async(request,response)=>{
    const studlist = await Blog.findAll()
    response.json({status:true,data:studlist})

})  

router.put('/update/:id',async(request,response)=>{
       var id = request.params.id
       var {name,date,title,blog} = request.body
       var id = request.params.id
       var student = await Blog.findOne({
        where : { id : id }
       })
      if(student==null)
         response.json({status:false,msg:'student not found'})
      else{
          student = await student.update({name,date,title,blog})
          response.json({status:true,data:student,msg:"Student Update"})
      }
    })
 
    router.delete('/delete/:id', async(request,response)=>{
        var id = request.params.id
        var student = await Blog.findOne({
            where : { id : id }
           })
          if(student==null)
             response.json({status:false,msg:'student not found'})
          else{
              student.destroy()
              response.json({status:true,msg:"Student Delete!"})
          }
     })

 

module.exports = router