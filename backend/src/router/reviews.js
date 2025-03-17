import express from "express"
import reviewsC from "../controllers/reviewsC.js";

const router = express.Router();
router.route("/")
.get(reviewsC.getreviews)
.post(reviewsC.insertreviews)
router.route("/:id")
.put(reviewsC.updatereviews)
.delete(reviewsC.deletereviews)

export default router