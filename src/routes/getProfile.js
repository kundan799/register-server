const getProfileRouter = require('express').Router();
const AuthModel = require('../models/auth.js');

getProfileRouter.get('/', async (req, res) => { //userDetails
    const { userId } = req.body;    
    let userDetails = await AuthModel.findOne({_id: userId});    
    res.send(userDetails);
});

module.exports = getProfileRouter;