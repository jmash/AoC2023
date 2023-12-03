const aoc_day3 = (request, response, next) => {
    const solutionInput = request.query.solutionInput;
    console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);

    response.send(`${solutionInput} received`);
};

exports.aoc_day3 = aoc_day3;