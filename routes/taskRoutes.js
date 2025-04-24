const express = require('express');
const router = express.Router();
const { addTask, getTasks, deleteTask } = require('../controllers/task');
const auth = require('../middelware/auth');

router.use(auth); 
router.post('/', addTask);
router.get('/', getTasks);
router.delete('/:id', deleteTask);

module.exports = router;
