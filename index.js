var express = require('express');
var bodyparser = require('body-parser');
var routes=require('./routes/userRoutes');
const app= express();

require('./config/db');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log("server is running at http://localhost:"+port)
})