const calculateBmiRouter = require("express").Router();
const BmiModel = require("../models/bmi.js");

calculateBmiRouter.post("/", async (req, res) => { //calculate
  const { weight, height, userId } = req.body;  
  let bmi = weight / ((height * 0.3048) ** 2);
  await BmiModel.create({userId: userId, weight: weight, height: height, userBmi: bmi});
  res.send({msg: bmi});
});

module.exports = calculateBmiRouter;
