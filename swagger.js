const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Disaster Management API',
            version: '1.0.0',
            description: 'API documentation for Disaster Management System'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ],
        components: {
            schemas: {
                Disaster: {
                    type: 'object',
                    required: ['name', 'description', 'date', 'location'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Name of the disaster'
                        },
                        description: {
                            type: 'string',
                            description: 'Description of the disaster'
                        },
                        date: {
                            type: 'string',
                            format: 'date',
                            description: 'Date of the disaster'
                        },
                        location: {
                            type: 'string',
                            description: 'Location of the disaster'
                        }
                    }
                }
            }
        }
    },
    apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = (server) => {
    server.route({
        method: 'GET',
        path: '/api-docs',
        handler: (request, h) => {
            return h.response(swaggerUi.setup(specs)).type('text/html');
        }
    });

    server.route({
        method: 'GET',
        path: '/swagger.json',
        handler: (request, h) => {
            return h.response(specs).type('application/json');
        }
    });
};
