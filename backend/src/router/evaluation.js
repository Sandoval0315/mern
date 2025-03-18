import express from "express"
import evaluationC from "../controllers/evaluationC.js" 

const router = express.Router();
router.route("/")
.get(evaluationC.getevaluation)
.post(evaluationC.insertevaluation)
router.route("/:id")
.put(evaluationC.updateevaluation)
.delete(evaluationC.deleteevaluation)

export default router;