const request = require('supertest');
const assert = require('assert');
const { app } = require('../config/server.config');

describe("Advent of Code Day 1 Tests", () => {

    describe("Advent of Code Day 1 Basic Tests", () => {
        it('returns an error message if the query is empty', async () => {
            const expectedResult = "No query received.";
           
            await request(app)
            .post('/aoc_day1')
            .expect(500)
            .then((response) => {
                expect(response.body.error).toBe(expectedResult);
            });
        });
    });

    /*1abc2 12
      pqr3stu8vwx 38
      a1b2c3d4e5f 15
      treb7uchet 77
 */
    describe("Part 1 Tests", () => {
        it('returns 12 when the input is 1abc2', async() => {
            const solutionPost = { solutionInput: "1abc2", part: '1' };
            const expectedResult = "12";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 38 when the input is pqr3stu8vwx', async() => {
            const solutionPost = { solutionInput: "pqr3stu8vwx", part: '1' };
            const expectedResult = "38";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });
        
        it('returns 15 when the input is a1b2c3d4e5f', async() => {
            const solutionPost = { solutionInput: "a1b2c3d4e5f", part: '1' };
            const expectedResult = "15";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 77 when the input is treb7uchet', async() => {
            const solutionPost = { solutionInput: "treb7uchet", part: '1' };
            const expectedResult = "77";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 142 when the input is 1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet', async() => {
            const solutionPost = { solutionInput: "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet", part: '1' };
            const expectedResult = "142";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

    });

    describe("Part 2 Tests", () => {
        it('returns 29 when the input is two1nine', async() => {
            const solutionPost = { solutionInput: "two1nine", part: '2' };
            const expectedResult = "29";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            //.expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 83 when the input is eighttwothree', async() => {
            const solutionPost = { solutionInput: "eighttwothree", part: '2' };
            const expectedResult = "83";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 13 when the input is abcone2threexyz', async() => {
            const solutionPost = { solutionInput: "abcone2threexyz", part: '2' };
            const expectedResult = "13";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 24 when the input is xtwone3four', async() => {
            const solutionPost = { solutionInput: "xtwone3four", part: '2' };
            const expectedResult = "24";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 42 when the input is 4nineeightseven2', async() => {
            const solutionPost = { solutionInput: "4nineeightseven2", part: '2' };
            const expectedResult = "42";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 14 when the input is zoneight234', async() => {
            const solutionPost = { solutionInput: "zoneight234", part: '2' };
            const expectedResult = "14";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 76 when the input is 7pqrstsixteen', async() => {
            const solutionPost = { solutionInput: "7pqrstsixteen", part: '2' };
            const expectedResult = "76";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 12 when the input is 1abc2', async() => {
            const solutionPost = { solutionInput: "1abc2", part: '2' };
            const expectedResult = "12";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 11 when the input is 1abcone', async() => {
            const solutionPost = { solutionInput: "1abcone", part: '2' };
            const expectedResult = "11";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        //rsh1five3ninefourmfk 14
        //xtrh534nqxr 54
        // 54 + 14 = 68

        it('returns 68 when the input is rsh1five3ninefourmfk{newline}xtrh534nqxr', async() => {
            const solutionPost = { solutionInput: "rsh1five3ninefourmfk\nxtrh534nqxr", part: '2' };
            const expectedResult = "68";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });
        

        it('returns 16 when the input is kng16', async() => {
            const solutionPost = { solutionInput: "kng16", part: '2' };
            const expectedResult = "16";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        it('returns 281 when every line is input', async() => {
            const solutionPost = { solutionInput: "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen", part: '2' };
            const expectedResult = "281";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });

        //fcpkrvmtzxkrfsmqcbzeight7gfourfbkthreeoneightvm

        it('returns 88 when the input is fcpkrvmtzxkrfsmqcbzeight7gfourfbkthreeoneightvm', async() => {
            const solutionPost = { solutionInput: "fcpkrvmtzxkrfsmqcbzeight7gfourfbkthreeoneightvm", part: '2' };
            const expectedResult = "88";

            await request(app)
            .post('/aoc_day1')
            .send(solutionPost)
            .expect(200)
            .then((response) => {
                expect(response.body.solutionResult).toEqual(expectedResult);
            })
        });
    });
});

