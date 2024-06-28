const MappingController = require('../controllers/mappingController');

module.exports = [
    {
        method: 'GET',
        path: '/mappings',
        handler: MappingController.getAllMappings
    },
    {
        method: 'POST',
        path: '/mappings',
        handler: MappingController.createMapping
    },
    // Add other routes as needed
];
