var db = require('../models');
var Task = db.Task;
var user = db.user;



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
    todo: function (req, res,next) {
        Task.findOrCreate({ where: { id: req.body.id }, defaults: { title: req.body.title } })
        .spread((Task, created) => {
            console.log(Task.get({
                 plain:true
            }))
            console.log(created)
            })
            .then(function () {
                return res.redirect('/tasks');
            })
    },
    newmember: function (req, res,next) {
        user.findOrCreate({ where: { username: req.body.username }, defaults: { password: req.body.password } })
        .spread((user, created) => {
            console.log(user.get({
                plain: true
            }))
            console.log(created)
        })
    }
};
module.exports = taskController;