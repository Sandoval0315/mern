import express from "express"
import productsC from "../controllers/productsC.js";


//metodos, en este caso un CRUD

const router = express.Router();
router.route("/")
.get(productsC.getproducts)
.post(productsC.insertProducts)
router.route("/:id")
.put(productsC.updateProducts)
.delete(productsC.deleteProducts)

export default router;