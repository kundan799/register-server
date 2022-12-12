const e = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors")


const registerRouter = require('./src/routes/register.js');
const loginRouter = require('./src/routes/login.js');
const getProfile = require('./src/routes/getProfile.js');
const getCalculateRouter = require('./src/routes/getCalculation.js');
const calculateBmiRouter = require('./src/routes/calculateBmi.js');

const { authentication } = require('./src/middlewares/auth.middleware.js');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors())
require('dotenv/config');

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.use(authentication);
app.use('/getprofile', getProfile);
app.use('/calculatebmi', calculateBmiRouter);
app.use('/getcalculation', getCalculateRouter);

app.get('/', (req, res) => {
    res.send('welcome to Bmi Calculator');
});

app.listen(PORT, async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connection established with db');
    }catch{
        console.log('something went wrong with db')
    }
    console.log(`http://localhost:${PORT}`);
});