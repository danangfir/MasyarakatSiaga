const mongoose = require('mongoose');
const request = require('supertest');
const { init } = require('../../index');
const Education = require('../models/educationModel');

let validToken;

beforeAll(async () => {
    server = await init();
    // Lakukan proses login untuk mendapatkan token
    const loginResponse = await request(server.listener)
        .post('/auth/login')
        .send({
            username: 'testuser',
            password: 'testpassword'
        });
    validToken = loginResponse.body.token; // Sesuaikan dengan struktur respons login Anda
});

afterAll(async () => {
    await server.stop();
    await mongoose.connection.close();
}, 30000);

beforeEach(async () => {
    await Education.deleteMany({});
}, 30000);

describe('Education API', () => {
    test('should GET all education resources', async () => {
        const res = await request(server.listener)
            .get('/education')
            .set('Authorization', 'Bearer ' + validToken);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    test('should POST a new education resource', async () => {
        const res = await request(server.listener)
            .post('/education')
            .send({
                title: 'New Education Resource',
                description: 'Description of the new education resource'
            })
            .set('Authorization', 'Bearer ' + validToken);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });

    test('should DELETE an education resource given the id', async () => {
        const education = new Education({
            title: 'Education to be deleted',
            description: 'Description of the education to be deleted'
        });
        await education.save();

        const res = await request(server.listener)
            .delete(`/education/${education._id}`)
            .set('Authorization', 'Bearer ' + validToken);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Education deleted successfully');
    });
});