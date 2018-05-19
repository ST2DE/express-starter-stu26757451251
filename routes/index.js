const taskController = require('../controllers/taskController.js');
const authController = require('../controllers/authController.js');


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
  
    app.post('/login',authController.doLogin);
    

};

