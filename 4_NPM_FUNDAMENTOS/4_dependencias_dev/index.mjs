import _  from'lodash'
import chalk from 'chalk'

const a = [1, 5, 6, 3, 4, 5]
const b = [0, 5, 2, 6, 4, 7]

const diff = _.difference(a, b);

console.log(diff);

console.log(chalk.red.bold(diff));

