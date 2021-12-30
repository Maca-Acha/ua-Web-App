
const checkRoles = roles => (req, res, next) => {
 
 if (roles.includes(req.user.role)){
     return next()
 }
 return res.json({message: 'Unauthorized', success: false})

}
module.exports = {checkRoles} 