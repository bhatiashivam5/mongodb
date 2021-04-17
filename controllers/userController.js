require('../model/userModel');
const mongoose = require('mongoose');

var UserData=mongoose.model('user');


module.exports.addnew=(req,res)=>{

    var myData=new UserData({
        name:req.body.username,
        email:req.body.uemail,
        contact:req.body.ucontact,
        address:req.body.uadd
    });

    myData.save().then((docs)=>{
        return res.status(200).json({
            message:'Data inserted successfully',
            success:true,
            data:docs 
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            message:'Error in adding new user',
            success:false,
            error:err.message
        })
    });


}
