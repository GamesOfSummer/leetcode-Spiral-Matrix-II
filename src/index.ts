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

    let column = 0;
    let column2 = 1;
    let currentRow = 0;
    let row2 = 0;

    let index = 0;
    let counter = 0;

    let endResult: number[][] = Array.from(
        Array(arraySize),
        () => new Array(arraySize)
    );

    while (index < arraySize * arraySize) {
        for (let i = currentRow; i < arraySize; i++) {
            endResult[currentRow][i] = counter;
            counter++;
        }

        index++;
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
