const disasterController = require('../controllers/disasterController');

module.exports = [
    {
        method: 'GET',
        path: '/disasters',
        handler: disasterController.getAllDisasters
    },
    {
        method: 'POST',
        path: '/disasters',
        handler: disasterController.createDisaster
    },
    {
        method: 'GET',
        path: '/disasters/{id}',
        handler: disasterController.getDisasterById
    },
    {
        method: 'PUT',
        path: '/disasters/{id}',
        handler: disasterController.updateDisaster
    },
    {
        method: 'DELETE',
        path: '/disasters/{id}',
        handler: disasterController.deleteDisaster
    }
];
