import { Schema, SchemaTypes, model } from "mongoose"; 

const clientsSchemas = new Schema({
    name: {
        type: String, 
        require: true,
        match: [
            /^[A-Za-z\s]+$/,
            "El nombre solo puede contener letras y espacios",
          ],
        miLength: 2,
        maxLength: 20
    },
    lastName: {
        type: String, 
        require: true,
        match: [
            /^[A-Za-z\s]+$/,
            "El nombre solo puede contener letras y espacios",
          ],
        miLength: 2,
        maxLength: 20
    },
    birthday: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value < Date.now();
            },
            message: "La fecha de nacimiento es erronea"
        }
    },
    
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minLength: 8
    },
    cellphone: {
        type: String,
        match: /^\+?(\d{1,3})?(\d{9})$/, 
        required: false,
    },
    
    dui: {
        type: String,
        match: /^\d{8}-\d$/, 
        required: false,
    },
    
    isVerified:{
        type: Boolean,
        require: true
    }
}
)

export default model("clients", clientsSchemas);
