const request = require('supertest');
const { app } = require('../config/server.config');

describe("Advent of Code Day 3 Tests", () => {

    describe("Advent of Code Day 3 Basic Tests", () => {
        it('returns an error message if the query is empty', async () => {
            const expectedResult = "No query received.";
           
            await request(app)
            .post('/aoc_day3')
            .expect(500)
            .then((response) => {
                expect(response.body.error).toBe(expectedResult);
            });
        });
    });

    describe("Advent of Code Day 3 Part 1 Tests", () => {
        it('returns something', async() => {
            const solutionPost = { solutionInput: "467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..", part: '1' };
            const expectedResult = 1;

            await request(app)
            .post('/aoc_day3')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });
        
    });

    describe("Advent of Code Day 3 Part 2 Tests", () => {

        
    });

});