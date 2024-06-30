'use strict';

require('dotenv').config();
const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const routes = require('./backend/routes');
const jwt = require('@hapi/jwt');
const swaggerDocs = require('./swagger');
const helmet = require('helmet');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost'
    });

    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    await server.register(jwt);

    server.auth.strategy('jwt', 'jwt', {
        keys: process.env.JWT_SECRET,
        verify: {
            aud: false,
            iss: false,
            sub: false,
            nbf: true,
            exp: true,
            maxAgeSec: 14400, // 4 hours
            timeSkewSec: 15
        },
        validate: (artifacts, request, h) => {
            return {
                isValid: true,
                credentials: { user: artifacts.decoded.payload }
            };
        }
    });

    server.auth.default('jwt');

    server.route(routes);
    swaggerDocs(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);

    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

module.exports = { init };

if (require.main === module) {
    init();
}