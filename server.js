const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();
const port = 3000;

app.use(express.json());

// Optional: Keep from previous
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

// Mount tasks
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});