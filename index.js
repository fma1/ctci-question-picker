const optionDefinitions = [
  { name: 'numberOfProblems', alias: 'n', type: Number, defaultOption: 1 },
];

const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);

const chapters = [1, 2, 3, 4, 7];
const problems = [9, 8, 6, 12, 2];

const set = new Set();

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < options.numberOfProblems; i++) {
  const newProb = [];

  do {
    newProb.length = 0;
    newProb.push(chapters[getRandomInt(0, chapters.length - 1)]);
    newProb.push(problems[getRandomInt(0, problems.length - 1)]);
    newProb.str = newProb[0] + '-' + newProb[1];
  } while (set.has(newProb.str));

  set.add(newProb.str);
}

set.forEach(value => console.log(value));
