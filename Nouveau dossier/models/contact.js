const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var contact =new Schema({
    fullName:String,
    phone:Number
});

module.exports=mongoose.model('contacts', contact);