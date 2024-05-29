const express = require("express");
const {
    getAllTask, 
    createTask,
    updateTask,
    getTask,
    deleteTask} = require('../controller/task')
const routes = express.Router();

routes.route('/').get(getAllTask).post(createTask);
routes.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = routes;

