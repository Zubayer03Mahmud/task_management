const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res) => {
  const tasks = req.app.locals.tasks || [];
  res.json(tasks);
});

// Keep /task/:id from Lab 1 (with invalid ID handling)
router.get('/task/:id', (req, res) => {
  const idParam = req.params.id;
  const id = parseInt(idParam);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  const tasks = req.app.locals.tasks || [];
  const task = tasks.find(t => t.id === id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

router.post('/tasks', (req, res) => {
  try {
    const { title, completed, priority } = req.body;
    if (!title || typeof completed !== 'boolean' || !['low', 'medium', 'high'].includes(priority)) {
      return res.status(400).json({ error: 'Invalid task data. Required: title (string), completed (boolean), priority (low/medium/high)' });
    }
    const tasks = req.app.locals.tasks || [];
    const newId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const newTask = {
      id: newId,
      title,
      completed,
      priority,
      createdAt: new Date()
    };
    tasks.push(newTask);
    req.app.locals.tasks = tasks;  // Update storage
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

module.exports = router;