const express = require('express')
const router = express.Router()



router.get('/home',(req,res)=>{
    res.send("this is home")
})
router.post('/home/:id',(req,res)=>{
    res.send("welcome "+req.params.id+"to ur home"+'your details is '+ JSON.stringify.req.query+' data we received'+ JSON.stringify.req.body)
})
router.put('./edit/:id',(req,res)=>{
    console.log('this is a put call');
})
module.exports=router;