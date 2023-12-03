const aoc_day8 = (request, response, next) => {
    const solutionInput = request.query.solutionInput;
    console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);

    response.send(`${solutionInput} received`);
};

exports.aoc_day8 = aoc_day8;