const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('It should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'NOME DA ONG')
            .send({
                name: "Sei la",
                email: "contato@contato.com",
                whatsapp: "4700000000",
                city: "Recife",
                uf: "PE"
            });

        expect(response.body).toHaveProperty('id');
    });
});