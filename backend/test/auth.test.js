const { init } = require('../../index');
const mongoose = require('mongoose');
const request = require('supertest');
const User = require('../models/userModels'); // Pastikan ini mengarah ke model yang benar

describe('Auth API', () => {
    let server;

    beforeAll(async () => {
        server = await init();
    }, 30000); // Tambahkan timeout 30 detik untuk inisialisasi server

    afterAll(async () => {
        await server.stop();
        await mongoose.connection.close();
    }, 30000); // Tambahkan timeout 30 detik untuk menghentikan server dan menutup koneksi

    it('should register a new user', async () => {
        const user = {
            name: "John Doe",
            email: "john.doe@example.com",
            password: "password123"
        };

        await User.deleteMany({ email: "john.doe@example.com" }); // Bersihkan pengguna sebelumnya dengan email yang sama

        const res = await request(server.listener)
            .post('/auth/register')
            .send(user);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    }, 30000); // Tambahkan timeout 30 detik untuk tes ini

    it('should login a user', async () => {
        const user = new User({
            name: "John Doe",
            email: "john.doe@example.com",
            password: "password123"
        });
        await user.save();

        const res = await request(server.listener)
            .post('/auth/login')
            .send({
                email: "john.doe@example.com",
                password: "password123"
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    }, 30000); // Tambahkan timeout 30 detik untuk tes ini
});
