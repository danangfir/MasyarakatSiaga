const AuthController = require('../controllers/authController');

module.exports = [
    {
        method: 'POST',
        path: '/auth/register',
        handler: AuthController.register
    },
    {
        method: 'POST',
        path: '/auth/login',
        handler: AuthController.login
    }
];
