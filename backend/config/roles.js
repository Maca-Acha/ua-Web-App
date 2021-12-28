// const passport = require('passport')



const checkRoles = roles => (req, res, next) => {
console.log('desde roles.js', req.user)
  
//  if (role.includes(req.user.rol)){
//      return next()
//  }
//  return res.json({message: 'Unauthorized', success: false})

}
module.exports = {checkRoles} 