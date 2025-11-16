const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
const port = 3000;
app.use(express.json());
app.use('/',tasksRouter);
// In-memory storage (starts empty in pure dev, but seeded here for testing)
// const tasks = [
//   { id: 1, title: 'Buy groceries', completed: false, priority: 'medium', createdAt: new Date('2024-10-01T10:00:00Z') },
//   { id: 2, title: 'Finish report', completed: true, priority: 'high', createdAt: new Date('2024-10-02T14:30:00Z') },
//   { id: 3, title: 'Walk the dog', completed: false, priority: 'low', createdAt: new Date('2024-10-03T09:15:00Z') },
//   { id: 4, title: 'Call family', completed: true, priority: 'medium', createdAt: new Date('2024-10-04T18:45:00Z') },
//   { id: 5, title: 'Exercise', completed: false, priority: 'high', createdAt: new Date('2024-10-05T07:00:00Z') }
// ];
const tasks = [
    { id: 1, title: 'Buy groceries', completed: false, priority: 'medium', createdAt: new Date('2025-11-01T10:00:00Z') },
    { id: 2, title: 'Finish report', completed: true, priority: 'high', createdAt: new Date('2025-11-02T14:30:00Z') },
    { id: 3, title: 'Walk the dog', completed: false, priority: 'low', createdAt: new Date('2025-11-03T09:15:00Z') },
    { id: 4, title: 'Call family', completed: true, priority: 'medium', createdAt: new Date('2025-11-04T18:45:00Z') },
    { id: 5, title: 'Exercise', completed: false, priority: 'high', createdAt: new Date('2025-11-05T07:00:00Z') }
];
// Middleware and routes will go here...

app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

// Mount tasks router (more in Step 7)
app.use('/', tasksRouter);  // Adjust if needed for base path
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime()
    });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});