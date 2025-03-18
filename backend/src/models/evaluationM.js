import {Schema, model} from "mongoose"

const evaluationSchemas = new Schema({
    comentario: {
        type: String,
        require: true,
        maxLength: 100
    },
    grade: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    idEmpleado: {
        type: Schema.Types.ObjectId,
        ref: "empleados",
        require: true
    }
},{
    timestamps: true,
    strict: false
}
)