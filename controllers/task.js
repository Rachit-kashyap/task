const db = require('../model/db');

exports.addTask = (req, res) => {
  const { text } = req.body;
  const newTask = {
    id: Date.now().toString(),
    userId: req.userId,
    text
  };

  db.tasks.push(newTask);
  res.status(201).json({ msg: 'Task added', task: newTask });
};

exports.getTasks = (req, res) => {
  const userTasks = db.tasks.filter(task => task.userId === req.userId);
  res.json(userTasks);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const index = db.tasks.findIndex(task => task.id === id && task.userId === req.userId);

  if (index === -1) return res.status(404).json({ msg: 'Task not found or not authorized' });

  db.tasks.splice(index, 1);
  res.json({ msg: 'Task deleted' });
};
