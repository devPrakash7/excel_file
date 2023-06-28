
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    asset_name:{
        type: String
    },
    floor: {

        type:Number
    },
    room_number: {
        type:Number
    },
    department :{

        type:String
    },
    brand:{
        type:String
    },
    model:{
        type:String
    },
    description :{
        type: String
    },
    installation_date :{
        type : Number
    },
    strategic_asset :{
        type: String
    },
    client_critical_asset :{
        type:String
    },
    replacement_cost:{
        type:Number
    },
    assets:{
        type:String
    },
    tenant_email:{

        type:String
    },
    assets_type_name:{

        type:String
    }
    
})


exports.userModels = mongoose.model("user" , userSchema);