const aoc_day4 = (request, response, next) => {
    const solutionInput = decodeURI(request.body.solutionInput);
    //console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);
    let part = request.body.part;

    if (solutionInput === "undefined") {
        response.status(500).send({ error: `No query received.` });
    } else {
        if (part === '1') {
            let numsExtractRegex = /Card \d:\s (\d+\s)* | (\d+[\s|\n]*)*/g;

            let numsMatches = solutionInput.matchAll(numsExtractRegex);

            console.log(numsMatches[1][0]);

            // let inputs = solutionInput.split('\n');

            let solutionResult = 0;



            response.status(200).send({ solutionResult: solutionResult });
        }
        else {
            let inputs = solutionInput.split('\n');

            let solutionResult = 0;


            response.status(200).send({ solutionResult: solutionResult });
        }
    }
};

exports.aoc_day4 = aoc_day4;