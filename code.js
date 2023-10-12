function generateFibonacciArray(numbersToGenerate) {
    if (numbersToGenerate <= 0) {
        return [];
    } else if (numbersToGenerate === 1) {
        return [0];
    } else if (numbersToGenerate === 2) {
        return [0, 1];
    } else {
        const sequence = generateFibonacciArray(numbersToGenerate - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
}
