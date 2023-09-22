const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const numbersToGenerate = 10; // Length of sequence to generate (beyond the first two numbers)

const test = jsc.forall("nat", function (n) {
    return JSON.stringify(generateFibonacciArray(n, [0, 1])) ==
        JSON.stringify(generateFibonacciArray(n));
});

jsc.assert(test);
