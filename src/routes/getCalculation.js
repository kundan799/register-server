const getCalculateRouter = require('express').Router();
const BmiModel = require('../models/bmi.js');

getCalculateRouter.get('/', async (req, res) => { //history
    const { userId } = req.body;
    const userHistory = await BmiModel.find({userId: userId});   
    res.send({msg: userHistory});
});

module.exports = getCalculateRouter;