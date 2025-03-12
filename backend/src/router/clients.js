import express from "express"
import clientsC from "../controllers/clientsC.js"

const router = express.Router();
router.route("/")
.get(clientsC.getproducts)
.post(clientsC.insertProducts)
router.route("/:id")
.put(clientsC.updateProducts)
.delete(clientsC.deleteProducts)

export default router;