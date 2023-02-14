const express = require('express');
const Contact = require('../models/contact.js');

const router = express.Router();

router.get('/',(req,res,next) =>
{
    res.json({message: 'hello'});
}
);


router.post('/', (req, res, next) => {
    var contact = new Contact({fullName: req.body.contactName, phone: req.body.contactNumber});
    contact.save((err, newContact)=>{
    if(err){
    console.log(`There is an error ${err}`);
    } else {
    // console.log(newContact);
    res.json(newContact);
    }
    
    });
    });

module.exports = router;