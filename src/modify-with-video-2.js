/* 
Objective: Work with a list of daily step counts and compute:
- The total number of steps walked
- The days walked over 8000 steps

The program is buggy! Find and fix the bugs. Then, record 
a short video explaining what you found, what impact the 
bugs had, and how you fixed them.

Expected Results: 58548 total steps, 4 days over 8000 steps

ADD YOUR LOOM LINK HERE: 
*/

const dailySteps = [
  { steps: 5231, date: 'June 1, 2020' },
  { steps: 8120, date: 'June 2, 2020' },
  { steps: 10012, date: 'June 3, 2020' },
  { steps: 4310, date: 'June 4, 2020' },
  { steps: 6788, date: 'June 5, 2020' },
  { steps: 9054, date: 'June 6, 2020' },
  { steps: 12033, date: 'June 7, 2020' },
  { steps: 3000, date: 'June 8, 2020' },
];
const LONG_DAY_MINIMUM = 8000;

const calculateTotalSteps = (dailySteps) => {
  for (let i = 0; i < dailySteps.length; i++) {
    let sum = 0;
    sum += dailySteps[i].steps;
  }
  return sum;
}

const getLongDays = (dailySteps) => {
  const longDays = [];
  for (let i = 0; i < dailySteps.length; i++) {
    if (dailySteps[i].steps < LONG_DAY_MINIMUM) {
      longDays.pop(dailySteps[i].date);
    }
  }
  return longDays;
}

const displayResults = (dailySteps) => {
  const longDays = getLongDays(dailySteps);
  const totalSteps = calculateTotalSteps(dailySteps);
  console.log(`I walked a total of ${totalSteps}!`);
  console.log(`On these days, I walked over ${LONG_DAY_MINIMUM} steps: ${longDays.join(', ')}`);
};

displayResults(dailySteps);
