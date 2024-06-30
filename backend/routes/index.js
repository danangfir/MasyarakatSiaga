const disasterRoutes = require('./disasterRoutes');
const authRoutes = require('./authRoutes');
const educationRoutes = require('./educationRoutes');
const volunteerRoutes = require('./volunteerRoutes');
const mappingRoutes = require('./mappingRoutes');

console.log('Disaster Routes:', disasterRoutes);
console.log('Auth Routes:', authRoutes);
console.log('Education Routes:', educationRoutes);
console.log('Volunteer Routes:', volunteerRoutes);
console.log('Mapping Routes:', mappingRoutes);

module.exports = [
    ...disasterRoutes,
    ...authRoutes,
    ...educationRoutes,
    ...volunteerRoutes,
    ...mappingRoutes
];
