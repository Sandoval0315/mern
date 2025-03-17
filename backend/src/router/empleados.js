import express from "express"
import empleadosC from "../controllers/empleadosC.js"

const router = express.Router();
router.route("/")
.get(empleadosC.getempleado)
.post(empleadosC.insertempleado)
router.route("/:id")
.put(empleadosC.updateempleado)
.delete(empleadosC.deleteempleado)

export default router;