import { Schema, models } from "mongoose";

const sucursalSchemas = new Schema({
    name: {
        type: String, 
        require: true,
        maxLength: 100
    },
    address: {
        type: String,
        require: true  
    },
    cellphone: {
        type: String,
        match: /^\+?(\d{1,3})?(\d{9})$/, 
        required: false,
    },
    schedule: {
        type: String,
        require: true
    }
})