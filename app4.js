/**
instalar express

npm i express
 */

 const express=require('express')
 const app = express()

 app.get('/',function(req,res){
    res.send('hola mundo')
 })

 app.listen(8080)

 