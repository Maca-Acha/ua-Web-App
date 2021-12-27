
const checkRoles = roles => (req, res, next) => {
 if (roles.includes(req.user.rol)){
     return next()
 }
 return res.json({message: 'Unauthorized', success: false})
}

module.exports = {checkRoles} 