const authRoutes = require('./authRoutes');
const disasterRoutes = require('./disasterRoutes');
const educationRoutes = require('./educationRoutes');
const mappingRoutes = require('./mappingRoutes');
const volunteerRoutes = require('./volunteerRoutes');

module.exports = [
    ...authRoutes,
    ...disasterRoutes,
    ...educationRoutes,
    ...mappingRoutes,
    ...volunteerRoutes
];
