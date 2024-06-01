const jwt = require('jsonwebtoken');
const {UnauthenticationError} = require('../errors');
require('dotenv').config()


const authorizationMiddleware = async(req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        throw new UnauthenticationError('No token Provided');// Bad request
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded
        req.user = { id, username};
        next()
        
    } catch (error) {
        throw new UnauthenticationError('Not authrized to access this route', 401);
    }
}

module.exports = authorizationMiddleware