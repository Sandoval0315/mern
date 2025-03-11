const empleadosC = {};

import empleadosM from "../models/empleadosM.js"
import productsM from "../models/productsM";

empleadosC.getempleado = async( req, res) =>{
    const empleados = await empleadosM.find()
    res.json(empleados)
}

empleadosC.insertempleado = async (req, res) =>{
    const{name, lastName, birthday, email, address, hireDate, password,cellphone, dui, isssNumber, isVerified} = req.body;
    const newempleado = new empleadosM({name, lastName, birthday, email, address, hireDate, password,cellphone, dui, isssNumber, isVerified})
    await newempleado.save()
    res.json({"empleado saved"})
}

empleadosC.deleteempleado = async (req,res) => {
    await empleadosM.findByIdAndDelete(req.params.id); 
    req.json({message: "delete empleado"})
}

empleadosC.updateempleado = async (req,res) => {
    const{name, lastName, birthday, email, address, hireDate, password,cellphone, dui, isssNumber, isVerified} = req.body;
    const updateempleado = await productsM.findByIdAndUpdate(req.params.id,{ name, lastName, birthday, email, address, hireDate, password,cellphone, dui, isssNumber, isVerified}, {new: true} )
    res.json({message: "update complete"})
}

export default empleadosC;