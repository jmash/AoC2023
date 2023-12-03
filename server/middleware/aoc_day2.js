const aoc_day2 = (request, response, next) => {
    const solutionInput = request.query.solutionInput;
    console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);

    response.send(`${solutionInput} received`);
};

exports.aoc_day2 = aoc_day2;