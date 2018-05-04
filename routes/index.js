const taskController = require('../controllers/taskController.js');
const todoitem = require('../controllers/todoitem.js')



module.exports = function (app) {
    app.get('/tasks', taskController.index);
    app.get('/api/tasks', taskController.indexApi);
    app.post('/tasks', taskController.todo);
};

