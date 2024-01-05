const aoc_day18 = (request, response, next) => {
    const solutionInput = request.query.solutionInput;
    console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);

    response.send(`${solutionInput} received`);
};

exports.aoc_day18 = aoc_day18;