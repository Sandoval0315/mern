import express from "express"
import sucursalesC from "../controllers/sucursalesC.js"

const router = express.Router();
router.route("/")
.get(sucursalesC.getproducts)
.post(sucursalesC.insertProducts)
router.route("/:id")
.put(sucursalesC.updateProducts)
.delete(sucursalesC.deleteProducts)

export default router;