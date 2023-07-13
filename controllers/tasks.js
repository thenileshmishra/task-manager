const getAllTasks = (req, res) => {
  res.send("all all tasks");
};

const createTasks = (req, res) => {
  res.send("Create tasks");
};
const getTasks = (req, res) => {
  res.send("getTasks ");
};
const updateTask = (req, res) => {
  res.send("updateTask ");
};
const deleteTasks = (req, res) => {
  res.send("deleteTasks ");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTask,
  deleteTasks,
};
