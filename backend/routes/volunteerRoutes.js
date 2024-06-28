const VolunteerController = require('../controllers/volunteerController');

module.exports = [
    {
        method: 'GET',
        path: '/volunteers',
        handler: VolunteerController.getAllVolunteers
    },
    {
        method: 'POST',
        path: '/volunteers',
        handler: VolunteerController.createVolunteer
    },
    // Add other routes as needed
];
