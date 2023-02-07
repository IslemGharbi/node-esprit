const express = require("express");
const app = express();
const port = 8080;
const middle = (req,res,next)=>{
    console.log('yoo');
    next();
};

app.get('/',middle,(req,res,next)=>
res.send('hellooo'))


app.listen(port,() =>
console.log(`server listening on port: ${port}`));