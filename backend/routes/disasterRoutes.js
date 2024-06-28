const DisasterController = require('../controllers/disasterController');

module.exports = [
    {
        method: 'GET',
        path: '/disasters',
        handler: DisasterController.getAllDisasters,
        options: {
            auth: 'jwt'
        }
    },
    {
        method: 'POST',
        path: '/disasters',
        handler: DisasterController.createDisaster,
        options: {
            auth: 'jwt'
        }
    },
    // Add other routes as needed
];
