const AuthService = require('../services/authService');

exports.register = async (request, h) => {
    try {
        const user = await AuthService.register(request.payload);
        return h.response(user).code(201);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.login = async (request, h) => {
    try {
        const token = await AuthService.login(request.payload);
        return h.response({ token }).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};
