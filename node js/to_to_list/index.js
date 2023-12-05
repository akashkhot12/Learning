const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let tasks = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  if (task) {
    tasks.push(task);
    res.json({ success: true, message: 'Task added successfully.' });
  } else {
    res.json({ success: false, message: 'Task cannot be empty.' });
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  if (!isNaN(taskId) && taskId >= 0 && taskId < tasks.length) {
    tasks.splice(taskId, 1);
    res.json({ success: true, message: 'Task deleted successfully.' });
  } else {
    res.json({ success: false, message: 'Invalid task ID.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
