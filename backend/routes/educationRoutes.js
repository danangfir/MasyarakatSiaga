const EducationController = require('../controllers/educationController');

module.exports = [
    {
        method: 'GET',
        path: '/education',
        handler: EducationController.getallEducation
    },

    {
        method: 'POST',
        path: '/education',
        handler: EducationController.createEducation
    },

    // Add routes as needed
];