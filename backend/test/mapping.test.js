const mongoose = require('mongoose');
const request = require('supertest');
const { init } = require('../../index');
const Mapping = require('../models/mappingModels');

let server;

beforeAll(async () => {
    server = await init();
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}, 10000); // Tambahkan timeout 10 detik

afterAll(async () => {
    await server.stop();
    await mongoose.connection.close();
}, 10000); // Tambahkan timeout 10 detik

beforeEach(async () => {
    await Mapping.deleteMany({});
}, 10000); // Tambahkan timeout 10 detik

describe('Mapping API', () => {
    it('should create a new mapping', async () => {
        const mapping = {
            name: "Evacuation Center",
            location: "Central Park",
            capacity: 500,
            type: "evacuation"
        };

        const res = await request(server.listener)
            .post('/mappings')
            .send(mapping);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('name', 'Evacuation Center');
        expect(res.body).toHaveProperty('location', 'Central Park');
        expect(res.body).toHaveProperty('capacity', 500);
        expect(res.body).toHaveProperty('type', 'evacuation');
    }, 10000); // Tambahkan timeout 10 detik
});
