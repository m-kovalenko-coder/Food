const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('a - basic', 'b - rest', 'rest = ', 'usage', 'usage', 'usage', 'usage', 'usage', 'usage', 'usage', 'usage');

function calcOrDouble(number, basis = 10) {
    console.log(number * basis);
}

calcOrDouble(3);