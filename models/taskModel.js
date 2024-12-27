const mongoose = require("mongoose");
const taskschema =new mongoose.Schema({
    titre: {
        type : String,
        required: true,
    },
    description : {
        type : String,
        required : true,
    },
    statut: {
        type : Boolean,
    },
})
const task=mongoose.model('task',taskschema)
module.exports=task