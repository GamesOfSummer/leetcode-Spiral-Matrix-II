import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function generateMatrix(arraySize: number): any {
    if (arraySize < 1) {
        return [[]];
    } else if (arraySize == 1) {
        return [[1]];
    }

    let startColumn = 0;
    let startRow = 0;

    let endcapColumn = arraySize - 1;
    let endcapRow = arraySize - 1;

    let counter = 1;

    //populate the array
    let endResult: number[][] = [];

    for (var i = 0; i < arraySize; i++) {
        endResult[i] = new Array(arraySize);
    }

    while (counter <= arraySize * arraySize) {
        // left to right on row
        for (let i = startColumn; i <= endcapColumn; i++) {
            endResult[startColumn][i] = counter;
            counter++;
        }

        startRow++;
        // up to down on column
        for (let i = startRow; i <= endcapRow; i++) {
            endResult[i][endcapColumn] = counter;
            counter++;
        }

        endcapColumn--;
        // right to left on row
        for (let i = endcapColumn; i >= startColumn; i--) {
            endResult[endcapRow][i] = counter;
            counter++;
        }

        endcapRow--;

        // down to up on column
        for (let i = endcapRow; i >= startRow; i--) {
            endResult[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }

    return endResult;
}

consoleStart();

validateFxn(generateMatrix(3), [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
]);

validateFxn(generateMatrix(4), [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
]);

validateFxn(generateMatrix(1), [[1]]);

consoleEnd();

export {};
