const numbersToGenerate = 10; // Length of sequence to generate (beyond the first two numbers)
function generateFibonacciArray(numbersToGenerate, sequence = [0, 1]) { // Function declaration to build the sequence recursively
    if (numbersToGenerate > 0) { // So long as the user requests to generate at least one number, we'll keep going
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]); // Obtain the next sequence entry
    return generateFibonacciArray(numbersToGenerate - 1, sequence); // Recursively call the function until we've generated the requested number of entries
    }
    else {
    return sequence; // Return just the first two values if the user requests zero entries or less
    }
}
console.log(generateFibonacciArray(numbersToGenerate, [0, 1])); // Log the results
