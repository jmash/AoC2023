const aoc_day3 = (request, response, next) => {
    const solutionInput = decodeURI(request.body.solutionInput);
    //console.log(`solutionInput: ${JSON.stringify(solutionInput)}`);
    let part = request.body.part;

    if (solutionInput === "undefined") {
        response.status(500).send({ error: `No query received.` });
    } else {
        if (part === '1') {
            let inputs = solutionInput.split('\n');

            console.log(inputs);

            let numberIndexMap = {
            };

            const numberRegExp = /(\d+)/g;

            // populate index map

            for (const input in inputs) {

                const numberMatches = inputs[input].matchAll(numberRegExp);

                for (const numberMatch of numberMatches) {

                    if (!numberIndexMap[Number(input)]) {
                        numberIndexMap[Number(input)] = [];
                    }

                    numberIndexMap[Number(input)].push(numberMatch.index);

                    // flesh out list of indices for each number
                    for (let i = numberMatch.index + 1; i < numberMatch.index + String(numberMatch[1]).length; i++) {

                        numberIndexMap[Number(input)].push(i);

                    }

                }
            }

            const indices = Object.keys(numberIndexMap);

            let allowedNumbers = [];

            for (const rowIndex of indices) {
                
                for (const checkIndex of numberIndexMap[rowIndex]) {
                    
                    let allowedNumberFlag = false;

                    // if upper left is valid
                    
                    if (Number(rowIndex) - 1 >= 0 && Number(checkIndex) - 1 > 0) {

                        //console.log(`${inputs[Number(rowIndex) - 1][Number(checkIndex) - 1]} is to the upper left of ${inputs[Number(rowIndex)][Number(checkIndex)]}`);
                        console.log(inputs[Number(rowIndex) - 1][Number(checkIndex) - 1]);
                        if (inputs[Number(rowIndex) - 1][Number(checkIndex) - 1] !== '.' && !Number.isInteger(inputs[rowIndex - 1][checkIndex - 1])) {
                            allowedNumberFlag = true;
                            continue;
                        }
                    }

                    // if upper right is valid

                    if (Number(rowIndex) - 1 >= 0 && Number(checkIndex) + 1 < inputs[rowIndex].length) {

                        // console.log(`${inputs[Number(rowIndex) - 1][Number(checkIndex) + 1]} is to the upper right of ${inputs[Number(rowIndex)][Number(checkIndex)]}`);

                    }

                    // if lower left is valid

                    if (Number(rowIndex) + 1 < inputs.length && Number(checkIndex) - 1 >= 0) {

                        // console.log(`${inputs[Number(rowIndex) + 1][Number(checkIndex) - 1]} is to the lower left of ${inputs[Number(rowIndex)][Number(checkIndex)]}`);

                    }

                    // if lower right is valid

                    if (Number(rowIndex) + 1 < inputs.length && Number(checkIndex) + 1 < inputs[rowIndex].length) {

                        // console.log(`${inputs[Number(rowIndex) + 1][Number(checkIndex) + 1]} is to the lower right of ${inputs[Number(rowIndex)][Number(checkIndex)]}`);

                    }

                    // if top is valid

                    if (Number(rowIndex) - 1 >= 0) {

                        // console.log(`${inputs[Number(rowIndex) - 1][Number(checkIndex)]} is to the top of ${inputs[Number(rowIndex)][Number(checkIndex)]}`);

                    }

                    // if right is valid

                    if (Number(checkIndex) + 1 < inputs[rowIndex].length) {

                        // console.log(`${inputs[Number(rowIndex)][Number(checkIndex) + 1]} is to the right of ${inputs[Number(rowIndex)][Number(checkIndex)]}`);

                    }

                    // if bottom is valid

                    if (Number(rowIndex) + 1 < inputs.length) {

                        // console.log(`${inputs[Number(rowIndex) + 1][Number(checkIndex)]} is to the bottom of ${inputs[Number(rowIndex)][Number(checkIndex)]}`);

                    }

                    // if left is valid

                    if (Number(checkIndex) - 1 >= 0) {

                        // console.log(`${inputs[Number(rowIndex)][Number(checkIndex) - 1]} is to the left of ${inputs[Number(rowIndex)][Number(checkIndex)]}`);

                    }
                    
                    if (allowedNumberFlag === true) {
                        allowedNumbers.push();
                    }
                }

            }

            // set aside space for accepted numbers

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