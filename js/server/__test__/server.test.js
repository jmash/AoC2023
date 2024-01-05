const request = require('supertest');
const { app } = require('../config/server.config');

describe("Basic server tests", () => {

    it('makes a GET request to / and responds with a status code of 200', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                done();
            });
    });
    
});