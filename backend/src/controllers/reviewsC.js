const reviewsC = {}

import reviewsM from "../models/reviewsM.js"

reviewsC.getreviews = async (req, res) =>{
    const reviews = await reviewsM.find().populate("idClient")
    res.json(reviews)
}

reviewsC.insertreviews = async (req, res) => {
    const{comment, rating, idClient} = req.body;
    const newreviews = new reviewsC({comment, rating, idClient})
    await newreviews.save()
    res.json({message: "review saved"})
}
reviewsC.deletereviews = async (req, ser) =>{
    await reviewsM.findByIdAndDelete(req.params.id)
    res.json({message: "review delete"})
}

reviewsC.updatereviews = async (req,res) =>{
    const{comment, rating, idClient} = req.body;
    const updatereviews = await reviewsM.findByIdAndUpdate(req.params.id, {comment, rating, idClient}, {new: true})
    res.json({message: "review update"})
}

export default reviewsC;