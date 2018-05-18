var db = require('../models');
var User = db.user;

let authController = {
    showLogin: function (req, res) {
        var isLogin = false;
        if(req.signedCookies.isLogin) {
            isLogin = true;
        }
        return res.render('login', { isLogin: isLogin });
    },

    protected: function (req, res) {
        var isLogin = false;
        if(req.signedCookies.isLogin) {
            isLogin = true;
        } else {
            return res.redirect('/login');
        }
        return res.render('protected', { isLogin: isLogin });
    },

    doLogin: function (req, res) {
        User.find({ where: {username: req.body.username, password: req.body.password }})
            .then(function (user) {
                if(user){
                    res.cookie('isLogin', true, { path: '/', signed: true, maxAge:600000 });
                    return res.redirect('/protected');
                } else {
                    return res.redirect('/login');
                }
            });
    },

    doLogout: function (req, res) {
        res.clearCookie('isLogin');
        return res.redirect('/login');
    },
};
module.exports = authController;