const aoc_day3 = (request, response, next) => {
    const solutionInput = decodeURI(request.body.solutionInput);
    //console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);
    let part = request.body.part;

    if (solutionInput === "undefined") {
        response.status(500).send({ error: `No query received.` });
    } else {
        if (part === '1') {
            const inputs = solutionInput.split('\n');

            const puzzleInputRowsBordered = addBorderToPuzzle(inputs);

            let numberIdentityMap = generateNumberIdentityMap(puzzleInputRowsBordered);

            let symbolPositionsMap = generateSymbolPositionsMap(puzzleInputRowsBordered);

            //checkForNumberAroundSymbol(2, 3);

            console.log("crashes here?");
            console.log(symbolPositionsMap);

            response.status(200).send({ solutionResult: solutionResult });
        }
        else {

            let inputs = solutionInput.split('\n');

            let solutionResult = 0;

            

            response.status(200).send({ solutionResult: solutionResult });
        }
    }
};

function checkForNumberAroundSymbol(rowInx, colInx) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            console.log(`[${i}][${j}]`);
        }
    }
}

function generateSymbolPositionsMap(puzzle) {

    console.log("entering symbol positions map");

    let symbolPositionsMap = {};

    symbolPositionsMap["#"].rowInx = 4;

    console.log(symbolPositionsMap);

    const symbolExtractRegex = /([^.^\d^\n])/g;

    for (const row in puzzle) {
        const symbolMatches = puzzle[row].matchAll(symbolExtractRegex);

        for (const match of symbolMatches) {
            console.log("about to try to assign values");
            symbolPositionsMap[match].rowInx = row;
            symbolPositionsMap[match].colInx = match.index;
        }
    }

    return symbolPositionsMap;

}

function generateNumberIdentityMap(puzzle) {

    let numberIdentityMap = {};

    const numberExtractRegex = /(\d)+/g;

    for (const row of puzzle) {
        const numberMatches = row.matchAll(numberExtractRegex);

        for (const match of numberMatches) {
            numberIdentityMap[match[0]] = 0;
        }
    }

    return numberIdentityMap;

}

function addBorderToPuzzle(puzzleInputRows) {

    let topBorderArray = [];

    let puzzleInputRowsBordered = [];

    for (let i = 0; i < puzzleInputRows.length + 2; i++) {
        topBorderArray.push('.');
    }

    const topBorder = topBorderArray.join('');

    puzzleInputRowsBordered.push(topBorder);

    for (let row in puzzleInputRows) {
        let borderedRow = "." + puzzleInputRows[row] + ".";
        puzzleInputRowsBordered.push(borderedRow);
    }

    puzzleInputRowsBordered.push(topBorder);

    return puzzleInputRowsBordered;

}

exports.aoc_day3 = aoc_day3;

/**
 * if ((rowIndex - 1) > 0 && (Number(rowIndex) + 1) < inputs.length) {
    console.log("within upper and lower vertical bounds");
    console.log(`inputs[${rowIndex}][${checkIndex}]`);
    //console.log(inputs[index][checkIndex]);

    if (inputs[rowIndex - 1][checkIndex - 1] !== ".") {
        
    }
} else {

}

++++++
+xxxx+
+xxxx+
+xxxx+
+xxxx+
++++++
 
++++
+xx+
+xx+

if (rowIndex - 1 >= 0 && checkIndex - 1 >= 0) { 
                        
    if (input[rowIndex - 1][checkIndex - 1] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at top left of this number");
        continue;
    }

    // then top is also valid and this check is already accounted for
    if (input[rowIndex - 1][checkIndex] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at top of this number");
        continue;
    }

    // direct left is also valid and this check is already accounted for
    if (input [rowIndex][checkIndex - 1] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at left of this number");
        continue;
    }

}

// if lower left is valid
if (rowIndex + 1 < inputs.length && checkIndex - 1 >= 0) { 

    if (input[rowIndex - 1][checkIndex - 1] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at lower left of this number");
        continue;
    }

    // then bottom is also valid and this check is already accounted for
    if (input[rowIndex + 1][checkIndex] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at bottom of this number");
        continue;
    }

    // direct left is also valid and this check is already accounted for
    if (input [rowIndex][checkIndex - 1] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at left of this number");
        continue;
    }
    
}

// if upper right is valid
if (rowIndex - 1 >= 0 && checkIndex + 1 < inputs[checkIndex].length) { 

    if (input[rowIndex - 1][checkIndex + 1] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at lower left of this number");
        continue;
    }

    // then top is also valid and this check is already accounted for
    if (input[rowIndex - 1][checkIndex] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at bottom of this number");
        continue;
    }

    // direct right is also valid and this check is already accounted for
    if (input [rowIndex][checkIndex + 1] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at left of this number");
        continue;
    }
    
}

// if lower right is valid
if (rowIndex + 1 < inputs.length && checkIndex + 1 < inputs[checkIndex].length) {

    if (input[rowIndex - 1][checkIndex + 1] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at lower left of this number");
        continue;
    }

    // then bottom is also valid and this check is already accounted for
    if (input[rowIndex - 1][checkIndex] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at bottom of this number");
        continue;
    }

    // direct right is also valid and this check is already accounted for
    if (input [rowIndex][checkIndex + 1] !== "." && !Number.isInteger(Number(input[rowIndex - 1][checkIndex - 1]))) {
        console.log("symbol detected at left of this number");
        continue;
    }
    
}
*/