const educationController = require('../controllers/educationController');

module.exports = [
    {
        method: 'GET',
        path: '/education',
        handler: educationController.getAllEducation
    },
    {
        method: 'POST',
        path: '/education',
        handler: educationController.createEducation
    },
    {
        method: 'GET',
        path: '/education/{id}',
        handler: educationController.getEducationById
    },
    {
        method: 'PUT',
        path: '/education/{id}',
        handler: educationController.updateEducation
    },
    {
        method: 'DELETE',
        path: '/education/{id}',
        handler: educationController.deleteEducation
    }
];
