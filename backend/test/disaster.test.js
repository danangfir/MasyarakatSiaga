const { init } = require('../../index');
const mongoose = require('mongoose');
const request = require('supertest');
const Disaster = require('../models/disasterModels'); // Pastikan ini mengarah ke model yang benar

describe('Disasters API', () => {
    let server;

    beforeAll(async () => {
        server = await init();
    }, 30000); // Tambahkan timeout 30 detik untuk inisialisasi server

    afterAll(async () => {
        await server.stop();
        await mongoose.connection.close();
    }, 30000); // Tambahkan timeout 30 detik untuk menghentikan server dan menutup koneksi

    it('should GET all the disasters', async () => {
        const res = await request(server.listener).get('/disasters');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    }, 30000); // Tambahkan timeout 30 detik untuk tes ini

    it('should POST a new disaster', async () => {
        const disaster = {
            name: "Flood",
            description: "Heavy rain caused flooding"
        };

        const res = await request(server.listener)
            .post('/disasters')
            .send(disaster);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    }, 30000); // Tambahkan timeout 30 detik untuk tes ini

    it('should DELETE a disaster given the id', async () => {
        const disaster = new Disaster({
            name: "Flood",
            description: "Heavy rain caused flooding"
        });
        await disaster.save();

        const res = await request(server.listener)
            .delete(`/disasters/${disaster._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Disaster deleted successfully');
    }, 30000); // Tambahkan timeout 30 detik untuk tes ini
});
