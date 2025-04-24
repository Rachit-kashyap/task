const db = require('../model/db');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token || !db.sessions[token]) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }

  req.userId = db.sessions[token];
  next();
}

module.exports = authMiddleware;
