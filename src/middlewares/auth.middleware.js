const jwt = require('jsonwebtoken');
const AuthModel = require('../models/auth.js');

const authentication = (req, res, next) => {
    if(!req.headers.token) return res.status(401).send({msg: "please login."});
    
    jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){ 
            res.status(401).send({msg: "please login."});
        }else{
            req.body.userId = decoded.userId;            
            next();
        }
    })
};


module.exports = { authentication }