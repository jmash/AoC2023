const { number } = require("mathjs");

const aoc_day1 = (request, response, next) => {
    const solutionInput = decodeURI(request.body.solutionInput);
    //console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);
    let part = request.body.part;

    if (solutionInput === "undefined") {
        response.status(500).send({ error: `No query received.` });
    } else {
        if (part === '1') {
            let inputs = solutionInput.split('\n');

            console.log(inputs);

            let solutionResult = 0;

            for (let i = 0; i < inputs.length; i++) {
                let concatValue = 0;

                let firstValue = "";
                let secondValue = "";
                let isFirstValueFound = false;
                
                for (let j = 0; j < inputs[i].length; j++) {
                    if (!isFirstValueFound) {
                        if (!isNaN(Number(inputs[i][j]))) {
                            firstValue = inputs[i][j];
                            secondValue = inputs[i][j];
                            isFirstValueFound = true;
                        }
                    } else {
                        if (!isNaN(Number(inputs[i][j]))) {
                            secondValue = inputs[i][j];
                        }
                    }
                }

                concatValue = firstValue + secondValue;

                solutionResult += Number(concatValue);
            }

            solutionResult = String(solutionResult);

            response.status(200).send({ solutionResult: solutionResult });
        }
        else {
            //(?=(one|two|three|four|five|six|seven|eight|nine))
            /*
                53885 - too high 
                53868 - exactly!
            */

            let inputs = solutionInput.split('\n');

            let wordsToNumbers = {
                "one": "1",
                "two": "2",
                "three": "3",
                "four": "4",
                "five": "5",
                "six": "6",
                "seven": "7",
                "eight": "8",
                "nine": "9"
            }

            let solutionResult = 0;

            let spelledNumberRegex = /(?=(one|two|three|four|five|six|seven|eight|nine|\d{1}))/g;

            for (let i = 0; i < inputs.length; i++) {
                let concatValue = 0;

                let firstValue = "";
                let secondValue = "";

                let numberMatches = inputs[i].matchAll(spelledNumberRegex);

                let numberMatchesArray = [...numberMatches];
                let pureNumbersArray = [];

                numberMatchesArray.map((num) => {
                    console.log(num[1]);

                    if (wordsToNumbers[num[1]]) {
                        pureNumbersArray.push(wordsToNumbers[num[1]]);
                    } else {
                        pureNumbersArray.push(num[1]);
                    }
                });

                firstValue = pureNumbersArray[0];
                secondValue = pureNumbersArray[pureNumbersArray.length - 1];

                concatValue = firstValue + secondValue;

                console.log(`concatValue is: ${concatValue}`);

                solutionResult += Number(concatValue);
            }

            solutionResult = String(solutionResult);

            response.status(200).send({ solutionResult: solutionResult });
        }
    }
};

exports.aoc_day1 = aoc_day1;