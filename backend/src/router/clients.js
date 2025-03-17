import express from "express"
import clientsC from "../controllers/clientsC.js"

const router = express.Router();
router.route("/")
.get(clientsC.getclients)
.post(clientsC.insertclients)
router.route("/:id")
.put(clientsC.updateclients)
.delete(clientsC.deleteclients)

export default router;