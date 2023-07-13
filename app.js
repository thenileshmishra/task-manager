const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Task Manger APp");
});

// app.get('/api/v1/tasks')         -get all the tasks
// app.post('/api/v1/tasks')        -create a new task
// app.get('/api/v1/tasks/:id')     -get single task
// app.patch('/api/v1/tasks/:id')   -update task
// app.delete('api/v1/tasks/:id')   -delete task

app.listen(port, console.log(`server listning ${port}...`));
