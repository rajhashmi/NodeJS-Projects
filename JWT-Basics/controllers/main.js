require('dotenv').config();
const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const login = async (req,res) => {
    const {username, password} = req.body;

    if(!username || !password){
        throw new CustomAPIError('Please provide email and password', 400);
    };

    // just for demo, normally provided by DB!!
    const id = new Date().getDate();

    const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn: '30d'});
    res.status(200).json({message: 'user Create', token})
};

const dashboard = async (req,res)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startWith('Bearer ')){
        throw new CustomAPIError('No token Provided', 401);// Bad request
    }
    const luckyNumber = Math.floor(Math.random()* 99);
    res.status(200).json({message: `hello, Shahid Hashmi`,secret:`Here is your authorized data, you r lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}