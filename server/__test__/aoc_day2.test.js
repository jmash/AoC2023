const request = require('supertest');
const assert = require('assert');
const { app } = require('../config/server.config');

describe("Advent of Code Day 2 Tests", () => {

    describe("Advent of Code Day 2 Basic Tests", () => {
        it('returns an error message if the query is empty', async () => {
            const expectedResult = "No query received.";
           
            await request(app)
            .post('/aoc_day2')
            .expect(500)
            .then((response) => {
                expect(response.body.error).toBe(expectedResult);
            });
        });
    });

    describe("Advent of Code Day 2 Part 1 Tests", () => {
        it('returns 1 when the input is Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', async() => {
            const solutionPost = { solutionInput: "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green", part: '1' };
            const expectedResult = 1;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 2 when the input is Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', async() => {
            const solutionPost = { solutionInput: "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue", part: '1' };
            const expectedResult = 2;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 0 when the input is Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', async() => {
            const solutionPost = { solutionInput: "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red", part: '1' };
            const expectedResult = 0;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 0 when the input is Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', async() => {
            const solutionPost = { solutionInput: "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red", part: '1' };
            const expectedResult = 0;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 5 when the input is Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', async() => {
            const solutionPost = { solutionInput: "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", part: '1' };
            const expectedResult = 5;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 8 when the input includes all 5 entries from test data set', async() => {
            const solutionPost = { solutionInput: "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", part: '1' };
            const expectedResult = 8;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });
        
    });

    describe("Advent of Code Day 2 Part 2 Tests", () => {

        it('returns 48 when the input is Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', async() => {
            const solutionPost = { solutionInput: "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green", part: '2' };
            const expectedResult = 48;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 12 when the input is Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', async() => {
            const solutionPost = { solutionInput: "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue", part: '2' };
            const expectedResult = 12;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 1560 when the input is Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', async() => {
            const solutionPost = { solutionInput: "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red", part: '2' };
            const expectedResult = 1560;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 630 when the input is Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', async() => {
            const solutionPost = { solutionInput: "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red", part: '2' };
            const expectedResult = 630;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 36 when the input is Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', async() => {
            const solutionPost = { solutionInput: "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", part: '2' };
            const expectedResult = 36;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 2286 when the input includes all 5 entries from test data set', async() => {
            const solutionPost = { solutionInput: "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", part: '2' };
            const expectedResult = 2286;

            await request(app)
            .post('/aoc_day2')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });
    });
});