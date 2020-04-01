const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
    it('It should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
                name: "Sei la",
                email: "contato@contato.com",
                whatsapp: "4700000000",
                city: "Recife",
                uf: "PE"
        });

        console.log(response.body);
    });
});