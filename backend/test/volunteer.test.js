const mongoose = require('mongoose');
const request = require('supertest');
const { init } = require('../../index');
const Volunteer = require('../models/volunteerModels');

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
    await Volunteer.deleteMany({});
}, 10000); // Tambahkan timeout 10 detik

describe('Volunteer API', () => {
    it('should create a new volunteer', async () => {
        const volunteer = {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "1234567890"
        };

        const res = await request(server.listener)
            .post('/volunteers')
            .send(volunteer);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('name', 'John Doe');
        expect(res.body).toHaveProperty('email', 'john.doe@example.com');
        expect(res.body).toHaveProperty('phone', '1234567890');
    }, 10000); // Tambahkan timeout 10 detik

    // Tambahkan lebih banyak pengujian sesuai kebutuhan
});
