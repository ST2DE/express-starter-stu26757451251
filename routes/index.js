const taskController = require('../controllers/taskController.js');



module.exports = function (app) {
    app.get('/tasks', taskController.index);
    app.get('/api/tasks', taskController.indexApi);
    app.post('/tasks', taskController.todo);

    app.get('/tasks/edit', taskController.taskedit);
    app.post('/edit', taskController.editTable);
    app.get('/delete', taskController.taskdelete);

    app.post('/adduser', taskController.newmember);
    
};

