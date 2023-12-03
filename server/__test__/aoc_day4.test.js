const request = require('supertest');
const { app } = require('../config/server.config');

describe("Advent of Code Day 4 Basic Tests", () => {
    it('returns an error message if the query is empty', async () => {
        const expectedResult = "No query received.";
       
        await request(app)
        .post('/aoc_day4')
        .expect(500)
        .then((response) => {
            expect(response.body.error).toBe(expectedResult);
        });
    });

    describe("Advent of Code Day 4 Part 1 Tests", () => {
        
    });
});