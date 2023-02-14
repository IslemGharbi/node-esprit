const express=require("express");
const logger = require('morgan');
const createError=  require('http-errors');
const contactsRouter = require('./routes/contact.js');
const mongoose = require('mongoose');
const dbConfig = require('./database/mongodb.json');
const app=express();
// module.exports=express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/contact',contactsRouter);

app.use((req,res,next)=>{
    next(createError(404));
})

  //  mongoose.connect(dbConfig.mongo.url);

module.exports = app;