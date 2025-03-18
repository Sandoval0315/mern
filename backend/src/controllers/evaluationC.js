const evaluationC = {}

import evaluationM from "../models/evaluationM.js"

evaluationC.getevaluation = async (req, res) =>{
    const evaluation = await evaluationM.find()
    res.json(evaluation)
}

evaluationC.insertevaluation = async (req, res) =>{
    const{comentario, grade, role, idEmpleado} = req.body;
    const newevaluation = new evaluationM({comentario, grade,role,idEmpleado})
    await newevaluation.save()
    res.json({message: "evaluation saved"})
}

evaluationC.deleteevaluation = async (req, res) =>{
    await evaluationM.findByIdAndDelete(req.params.id);
    req.json({message: "evaluation delete"})
}

evaluationC.updateevaluation = async (req, res) => {
    const{comentario, grade, role, idEmpleado} = req.body;
    const updateevaluation = await evaluationM.FindByIdAndUpdate(req.params.id, {comentario, grade,role,idEmpleado}, {new: true})
    req.json({message: "evaluation update"})
}

export default evaluationC;
