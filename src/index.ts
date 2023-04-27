import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function generateMatrix(arraySize: number): any {
    if (arraySize < 1) {
        return [];
    } else if (arraySize == 1) {
        return [1];
    }

    let startRow = 0;
    let currentColumn = 0;

    let endcapRow = arraySize - 1;
    let endcapColumn = arraySize - 1;

    let counter = 0;

    //populate the array
    let endResult: number[][] = Array.from(
        Array(arraySize),
        () => new Array(arraySize)
    );

    while (counter < arraySize * arraySize) {
        // left to right on row
        for (let i = startRow; i < endcapRow; i++) {
            endResult[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // up to down on column
        for (let i = currentColumn; i < endcapColumn; i++) {
            endResult[i][currentColumn] = counter;
            counter++;
        }
        currentColumn++;

        // right to left on row
        for (let i = endcapRow; i > startRow; i--) {
            endResult[endcapRow][i] = counter;
            counter++;
        }
        endcapRow--;

        // down to up on column
        for (let i = endcapColumn; i > currentColumn; i--) {
            endResult[i][endcapColumn] = counter;
            counter++;
        }
        endcapColumn--;
    }

    return endResult;
}

consoleStart();

validateFxn(generateMatrix(3), [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
]);

validateFxn(generateMatrix(1), [[1]]);

consoleEnd();

export {};
