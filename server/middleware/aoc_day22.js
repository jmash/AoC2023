const aoc_day22 = (request, response, next) => {
    const solutionInput = request.query.solutionInput;
    console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);

    response.send(`${solutionInput} received`);
};

exports.aoc_day22 = aoc_day22;