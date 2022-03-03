const express =require('express');
const client = require('pg');
const app = express()
client.connect('',{useNewUrlParser: true})
const db =client.connection
db.on('error',(error)=>  console.error(error))
db.once('open', ()=> console.log('Connected to Database'))
app.listen(3300, ()=>console.log('server Started'))