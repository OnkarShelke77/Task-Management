const { Task } = require('../models');

const getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  const task = await Task.create({ title, description, status, createdAt: new Date() });
  res.status(201).json(task);
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;
  const task = await Task.findByPk(taskId);
  if (task) {
    task.status = status;
    await task.save();
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findByPk(taskId);
  if (task) {
    await task.destroy();
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
