const Task = require("../models/Task")
const getAllTask =(req,res) =>{
    res.send("all taks");
};
const createTask = async(req,res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task})

};
const getTask =(req,res) =>{
    res.json({id: req.params.id});
};
const updateTask =(req,res) =>{
    res.send("update Task");
};
const deleteTask =(req,res) =>{
    res.send("delete Task");
};



module.exports = {
    getAllTask,
    createTask,
    updateTask,
    getTask,
    deleteTask
};