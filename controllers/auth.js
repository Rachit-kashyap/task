const db = require('../model/db');
const generateToken = require('../utils/token');

exports.register = (req, res) => {
  const { username, password } = req.body;
  if (db.users.find(user => user.username === username)) {
    return res.status(400).json({ msg: 'User already exists' });
  }

  const newUser = {
    id: Date.now().toString(),
    username,
    password
  };

  db.users.push(newUser);
  res.status(201).json({ msg: 'User registered' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = db.users.find(u => u.username === username && u.password === password);
  
  if (!user) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }

  const token = generateToken();
  db.sessions[token] = user.id;
  res.json({ token });
};
