const clientsC = {}

import clientsM from "../models/clientsM.js"


//select
clientsC.getclients = async(req, res) =>{
const clients = await clientsM.find()
res.json(clients)
}

//insert
clientsC.insertclients = async( req, res) => {
    const{name, lastName, birthday, email, password, cellphone, dui, esVerified} = req.body;
    const newclient = new clientsM({name, lastName, birthday, email, password, cellphone, dui, esVerified});
    await newclient.save()
    res.json({message: "client saved"})
};

//delete 
clientsC.deleteclients = async (req, res) => {
    await clientsM.findByandDelete(req.params.id);
    req.json({message: "client delete"})
}

//update
clientsC.updateclients = async (req, res) =>{
    const{name, lastName, birthday, email, password, cellphone, dui, esVerified} = req.body;
    const updateclients = await clientsM.findByandUpdate(req.params.id,{name, lastName, birthday, email, password, cellphone, dui, esVerified}, {new: true})
    res.json({message: "clients update"})
}

export default clientsC;