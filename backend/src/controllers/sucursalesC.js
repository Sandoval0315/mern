const sucursalesC = {}

import sucursalesM from "../models/sucursalesM.js"
//create
sucursalesC.getsucursales = async ( req, res ) =>{
    const sucursales = await sucursalesM.find()
    res.json(sucursales)
}
//insert
sucursalesC.insertsucursales = async (req, res) =>{
    const{name, address, cellphone,schedule} = req.body;
    const newsucursal = new sucursalesM({name, address, cellphone,schedule})
    await newsucursal.save()
    res.json({message: "sucursal saved"})
}
//delete
sucursalesC.deletesucursales = async (req, res)=>{
    await sucursalesM.findByIdAndDelete(req.params.id)
    res.json({message: "sucursal delete"})
}

//update
sucursalesC.updatesucursales = async (req, res) =>{
    const{name, address, cellphone,schedule} = req.body;
    const updatesucursales = await sucursalesM.findByIdAndUpdate(req.params.id,{name, address, cellphone,schedule}, {new: true})
    res.json({message: "sucursales update"})
}

export default sucursalesC;