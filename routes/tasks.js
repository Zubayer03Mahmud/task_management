const express = require('express');
const router = express.Router();

const tasks = [
    { id: 1, title: 'Buy groceries', completed: false, priority: 'medium', createdAt: new Date('2025-11-01T10:00:00Z') },
    { id: 2, title: 'Finish report', completed: true, priority: 'high', createdAt: new Date('2025-11-02T14:30:00Z') },
    { id: 3, title: 'Walk the dog', completed: false, priority: 'low', createdAt: new Date('2025-11-03T09:15:00Z') },
    { id: 4, title: 'Call family', completed: true, priority: 'medium', createdAt: new Date('2025-11-04T18:45:00Z') },
    { id: 5, title: 'Exercise', completed: false, priority: 'high', createdAt: new Date('2025-11-05T07:00:00Z') }
];

router.get('/tasks', (req, res) => {
    res.json(tasks);
});

// router.get('/tasks/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const task = tasks.find(t => t.id === id);
//     if (task) {
//         res.json(task);
//     } else {
//         res.status(404).json({ error: 'Task not found' });
//     }
// });
router.get('/tasks/:id', (req, res) => {  // Changed from '/task/:id'
    const idParam = req.params.id;
    const id = parseInt(idParam);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }
    const task = tasks.find(t => t.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});
module.exports = router;