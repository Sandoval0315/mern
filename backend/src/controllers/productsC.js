const productsC = {};

//codigo para el crud y sus funciones

// SELECT
import productsM from "../models/productsM.js";

productsC.getproducts = async(req, res) => {
const products = await productsM.find()
res.json(products)
}
// INSERT
productsC.insertProducts = async (req, res) => {
    const{ name, price, description, stock} = req.body; 
    const newproduct = new productsM({name, price, description, stock});
    await newproduct.save()
    res.json({message: "products saved"})
};


// DELETE

productsC.deleteProducts = async (req,res) => {
    await productsM.findByIdAndDelete(req.params.id); 
    req.json({message: "delete"})
}

//UPDATE
productsC.updateProducts = async (req,res) => {
    const{ name, price, description, stock} = req.body; 
    const updateProducts = await productsM.findByIdAndUpdate(req.params.id,{ name, price, description, stock}, {new: true} )
    res.json({message: "update complete"})
}

export default productsC;
