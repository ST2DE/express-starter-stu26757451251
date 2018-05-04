var db = require('../models');
var Task = db.Task;


let taskController = {
    index: function (req, res) {
        Task.findAll()
            .then(function (tasks) {
                res.render('index', { "tasks": tasks });
            });
    },
    indexApi: function (req, res) {
        Task.findAll()
            .then(function (tasks) {
                res.json(tasks);
            });
    },
    todo: function (req, res) {
        Task.findOrCreate({ where: { id: req.body.id }, defaults: { title: req.body.title } })
        .spread((Task, created) => {
            console.log(Task.get({
                 plain:true
            }))
            console.log(created)
        })
    }
};
module.exports = taskController;