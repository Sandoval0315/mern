import express from "express"
import empleadosC from "../controllers/empleadosC.js"

const router = express.Router();
router.route("/")
.get(empleadosC.getproducts)
.post(empleadosC.insertProducts)
router.route("/:id")
.put(empleadosC.updateProducts)
.delete(empleadosC.deleteProducts)

export default router;