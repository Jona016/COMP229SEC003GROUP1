function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
      if (!req.user) {
        return res.sendStatus(401);
      }
      if (allowedRoles.includes(req.user.role)) {
        next();
      } else {
        return res.sendStatus(403);
      }
    };
  }
  
  module.exports = { authorizeRoles };
  