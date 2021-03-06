const mongoose = require("mongoose");
const Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');

const IncidentAsigneeSchema = new Schema({
//Email of Assigned user
    AssignedTo:{
        type:String  
    },
    //Email of Admin
    AssignedByEmail:{
        type:String
    },

    Isperson:{
        type:Boolean
    },

    //Incident id to which we are asinging
    IncidentId:{
        type:Number      
    },

    //This will help us track the date on which a user is assigned to a disaster
    AssingedDate:{
        type:Date,
        default:Date.now    
    }

});


module.exports=IncidentAsignee= mongoose.model("IncidentAsignee", IncidentAsigneeSchema);