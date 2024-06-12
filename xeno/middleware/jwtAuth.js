const JWT = require('jsonwebtoken')

const jwtAuth = (req,res,next)=>{
    const token = (req.cookies && req.cookies.token) || null
    if(!token){
        return res.status(400).json({
            success:false,
            message : "not authorized user" 
        })
    }
    try {
        const decoded = JWT.verify(token,process.env.SECRET)
        req.user = {id : decoded.id , email: decoded.email}
        // req.ttt = {id : decoded.id , email: decoded.email}
    } catch (error) {
        return res.status(400).json({
            success:false,
            message : "not authorized user" 
        })
    }
    next();
}
module.exports = jwtAuth