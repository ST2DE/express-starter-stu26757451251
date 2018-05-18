const taskController = require('../controllers/taskController.js');
const authController = require('../controllers/authController.js');
const express = require('express');
const app = express();


module.exports = function (app) {

    app.get('/tasks', taskController.index);
    app.get('/api/tasks', taskController.indexApi);
    app.post('/tasks', taskController.todo);

    app.get('/tasks/edit', taskController.taskedit);
    app.post('/edit', taskController.editTable);
    app.get('/delete', taskController.taskdelete);

    app.post('/adduser', taskController.newmember);

    app.get('/', function (req, res) {
        res.render('getstart');
    })

    app.get('/login', authController.showLogin);
    app.post('/login', authController.doLogin);
    app.get('/logout', authController.doLogout);
    app.get('/protected', authController.protected);


};

