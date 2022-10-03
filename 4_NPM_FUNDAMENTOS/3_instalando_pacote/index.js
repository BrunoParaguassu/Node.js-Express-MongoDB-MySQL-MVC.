const _ = require('lodash');

const a = [1, 5, 6, 3, 4, 5, 9, 10]
const b = [0, 5, 2, 6, 4, 7, 1, 8]

const diff = _.difference(a, b);

console.log(diff);

