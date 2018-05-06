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
    newmember: function (req, res, next) {
        user.findOrCreate({ where: { username: req.body.username }, defaults: { password: req.body.password } })
        .spread((user, created) => {
            console.log(user.get({
                plain: true
            }))
            console.log(created)
            })
        return res.redirect('/tasks');  
    },
    taskedit: function (req, res, next) {
        let id = req.query.id;
        Task.findById(id).then(Task => {
            console.log(Task.title);
            res.render('taskeditpage', {'task':Task});
        })

        
    },
    editTable: function (req, res, next) {
        Task.findById(req.body.id).then(Task => {
            Task.updateAttributes({
                title:req.body.title
            })
        })
        return res.redirect('/tasks');
        
    },
    taskdelete: function (req, res, next) {
        Task.destroy({ where: { id: req.query.id } })
        console.log("deleted");
        return res.redirect('/tasks');
    }
};
module.exports = taskController;