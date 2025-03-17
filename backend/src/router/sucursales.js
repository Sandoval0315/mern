import express from "express"
import sucursalesC from "../controllers/sucursalesC.js"

const router = express.Router();
router.route("/")
.get(sucursalesC.getsucursales)
.post(sucursalesC.insertsucursales)
router.route("/:id")
.put(sucursalesC.updatesucursales)
.delete(sucursalesC.deletesucursales)

export default router;