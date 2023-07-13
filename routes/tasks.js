const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTasks,
  getTasks,
  updateTask,
  deleteTasks,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTasks).patch(updateTask).delete(deleteTasks);

module.exports = router;
