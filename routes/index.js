const taskController = require('../controllers/taskController.js');



module.exports = function (app) {
    app.set('view engine', 'pug');
    app.get('/tasks', taskController.index);
    app.get('/api/tasks', taskController.indexApi);
    app.post('/tasks', taskController.todo);
};

