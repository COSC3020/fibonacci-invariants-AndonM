const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

function fibTest(n) {
    let fib_solns = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) fib_solns.push(0);
        else if (i === 1) fib_solns.push(1);
        else fib_solns.push(fib_solns[i - 1] + fib_solns[i - 2]);
    }
    return fib_solns;
}

const test = jsc.forall("nat", function (n) {
    const result = generateFibonacciArray(n);
    const expected = fibTest(n);
    return JSON.stringify(result) === JSON.stringify(expected);
});

jsc.assert(test)
