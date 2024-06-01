require('dotenv').config();
const jwt = require('jsonwebtoken');
const {BadRequestError} = require('../errors');
const login = async (req,res) => {
    const {username, password} = req.body;
    if(!username || !password){
        throw new BadRequestError('Please provide email and password');
    };

    // just for demo, normally provided by DB!!
    const id = new Date().getDate();

    const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn: '30d'});
    res.status(200).json({message: 'user Create', token})
};

const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Math.random()* 99);
    res.status(200).json({message: `hello, ${req.user.username}`,secret:`Here is your authorized data, you r lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}