// create a server using node
// const http = require('http')
// http.createServer(function(req,res){
//     // if(req.url==='/application')
//     //    res.end('inside application ')
//     // else{
//     //     console.log(req)
//     //     res.end('hello my dear')
//     // }
//     switch(req.url){
//         case '/application':{
//             req.end(req.url)
//             break
//         }
//         case '/api':{
//             req.end('welcome'+' '+req.url)
//         }
//         default :{
//             req.end('default')
//         }
//     }
// }).listen(4000,()=>{
//     console.log("hii 4000 port listening");
// })


// create a server using express


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Routes = require('./Routes/Routes')
const cors = require('cors')


// app.use('/:data',(req,res)=>{
//     console.log("query",req.query);
//     console.log("params",req.params);
//     res.send("welcome to express js" + JSON.stringify(req.query))
// })


// const Routes = require('./Routes/Routes')
app.use('/api/v2',Routes)

app.listen(2000,()=>{
    console.log('connected');
})

