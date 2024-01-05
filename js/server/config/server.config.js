const express = require('express');
const cors = require("cors");
const url = require("url");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


const {
    aoc_day1,
} = require('../middleware/aoc_day1.js');

const {
    aoc_day2,
} = require('../middleware/aoc_day2.js');

const {
    aoc_day3,
} = require('../middleware/aoc_day3.js');

const {
    aoc_day4,
} = require('../middleware/aoc_day4.js');

const {
    aoc_day5,
} = require('../middleware/aoc_day5.js');

const {
    aoc_day6,
} = require('../middleware/aoc_day6.js');

const {
    aoc_day7,
} = require('../middleware/aoc_day7.js');

const {
    aoc_day8,
} = require('../middleware/aoc_day8.js');

const {
    aoc_day9,
} = require('../middleware/aoc_day9.js');

const {
    aoc_day10,
} = require('../middleware/aoc_day10.js');

const {
    aoc_day11,
} = require('../middleware/aoc_day11.js');

const {
    aoc_day12,
} = require('../middleware/aoc_day12.js');

const {
    aoc_day13,
} = require('../middleware/aoc_day13.js');

const {
    aoc_day14,
} = require('../middleware/aoc_day14.js');

const {
    aoc_day15,
} = require('../middleware/aoc_day15.js');

const {
    aoc_day16,
} = require('../middleware/aoc_day16.js');

const {
    aoc_day17,
} = require('../middleware/aoc_day17.js');

const {
    aoc_day18,
} = require('../middleware/aoc_day18.js');

const {
    aoc_day19,
} = require('../middleware/aoc_day19.js');

const {
    aoc_day20,
} = require('../middleware/aoc_day20.js');

const {
    aoc_day21,
} = require('../middleware/aoc_day21.js');

const {
    aoc_day22,
} = require('../middleware/aoc_day22.js');

const {
    aoc_day23,
} = require('../middleware/aoc_day23.js');

const {
    aoc_day24,
} = require('../middleware/aoc_day24.js');

const {
    aoc_day25,
} = require('../middleware/aoc_day25.js');

app.post('/aoc_day1', aoc_day1);
app.post('/aoc_day2', aoc_day2);
app.post('/aoc_day3', aoc_day3);
app.post('/aoc_day4', aoc_day4);
app.post('/aoc_day5', aoc_day5);
app.post('/aoc_day6', aoc_day6);
app.post('/aoc_day7', aoc_day7);
app.post('/aoc_day8', aoc_day8);
app.post('/aoc_day9', aoc_day9);
app.post('/aoc_day10', aoc_day10);
app.post('/aoc_day11', aoc_day11);
app.post('/aoc_day12', aoc_day12);
app.post('/aoc_day13', aoc_day13);
app.post('/aoc_day14', aoc_day14);
app.post('/aoc_day15', aoc_day15);
app.post('/aoc_day16', aoc_day16);
app.post('/aoc_day17', aoc_day17);
app.post('/aoc_day18', aoc_day18);
app.post('/aoc_day19', aoc_day19);
app.post('/aoc_day20', aoc_day20);
app.post('/aoc_day21', aoc_day21);
app.post('/aoc_day22', aoc_day22);
app.post('/aoc_day23', aoc_day23);
app.post('/aoc_day24', aoc_day24);
app.post('/aoc_day25', aoc_day25);

app.get('/', (req, res) => {
    res.status(200).send({ message: "Root route exists" });
});

app.post('/aoc_day/:day', (req, res) => {
    const daySelection = req.params.day;
    const solutionInput = req.body.solutionInput;
    const solutionUrlPath = url.format({
        protocol: "http", 
        port: 5000, 
        hostname: "localhost", 
        pathname:`/aoc_day${daySelection}`, 
        query: { 
            solutionInput: solutionInput        
        }});
    console.log(`Solution Input: ${solutionUrlPath}`);
    res.redirect(307, solutionUrlPath);
});

module.exports = { app };