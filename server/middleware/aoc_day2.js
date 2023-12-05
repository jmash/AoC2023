const aoc_day2 = (request, response, next) => {
    const solutionInput = decodeURI(request.body.solutionInput);
    //console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);
    let part = request.body.part;

    if (solutionInput === "undefined") {
        response.status(500).send({ error: `No query received.` });
    } else {
        if (part === '1') {
            let inputs = solutionInput.split('\n');

            let solutionResult = 0;
            let initialLineRegex = /^Game (\d+): (.*)/;
            let marbleCountLineRegex = /(\d+) (\w+)/g;
            
            for (let i = 0; i < inputs.length; i++) {
                
                let initialLineCapture = inputs[i].match(initialLineRegex);
                
                let lineId = initialLineCapture[1];

                let marbleCountLines = initialLineCapture[2].split(';');

                for (let j = 0; j < marbleCountLines.length; j++) {

                    let colorCountMap = {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                    }

                    let marbleCountCapture = marbleCountLines[j].matchAll(marbleCountLineRegex);

                    for (const marbleInfo of marbleCountCapture) {
                        
                        marbleCount = marbleInfo[1];
                        marbleColor = marbleInfo[2];

                        //console.log(`${marbleColor}: ${marbleCount}`);

                        colorCountMap[marbleColor] = marbleCount;

                    }

                    if (colorCountMap["red"] > 12 || colorCountMap["green"] > 13 || colorCountMap["blue"] > 14) {

                        lineId = 0;

                        continue;

                    }

                }
                solutionResult += Number(lineId);

            }

            response.status(200).send({ solutionResult: solutionResult });
        }
        else {
            let inputs = solutionInput.split('\n');

            let solutionResult = 0;
            let initialLineRegex = /^Game (\d+): (.*)/;
            let marbleCountLineRegex = /(\d+) (\w+)/g;
            
            for (let i = 0; i < inputs.length; i++) {
                
                let initialLineCapture = inputs[i].match(initialLineRegex);
                
                let marbleCountLines = initialLineCapture[2].split(';');

                let colorCountMap = {
                    "red": [],
                    "green": [],
                    "blue": [],
                }

                for (let j = 0; j < marbleCountLines.length; j++) {

                    let marbleCountCapture = marbleCountLines[j].matchAll(marbleCountLineRegex);

                    for (const marbleInfo of marbleCountCapture) {
                        
                        marbleCount = marbleInfo[1];
                        marbleColor = marbleInfo[2];

                        colorCountMap[marbleColor].push(Number(marbleCount));
                        //console.log(`${marbleColor}: ${colorCountMap[marbleColor]}`);
                    }

                }

                let colorCountMapKeys = Object.keys(colorCountMap);

                for (let obj in colorCountMapKeys) {
                    colorCountMap[colorCountMapKeys[obj]].sort((a, b) => { return a - b });
                    //console.log(colorCountMap[colorCountMapKeys[obj]].sort((a, b) => { return a - b }));
                }

                let redMax = colorCountMap["red"][colorCountMap["red"].length - 1];
                let greenMax = colorCountMap["green"][colorCountMap["green"].length - 1];
                let blueMax = colorCountMap["blue"][colorCountMap["blue"].length - 1];

                console.log(`Total: ${redMax} * ${greenMax} * ${blueMax} = ${redMax * greenMax * blueMax}`);

                solutionResult += Number(redMax * greenMax * blueMax);

            }

            response.status(200).send({ solutionResult: solutionResult });
        }
    }
};

exports.aoc_day2 = aoc_day2;