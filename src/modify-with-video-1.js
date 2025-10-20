/* 
Objective: Calculate and display the results of the 
grade book below. For each student, we want to display
the average of their quiz scores AND the average of 
their quiz scores after the lowest score is dropped.

The program is buggy! Find and fix the bugs. Then, record 
a short video explaining what you found, what impact the 
bugs had, and how you fixed them.

ADD YOUR LOOM LINK HERE: 
*/

const gradebook = [
  {
    studentName: "Andrew A.",
    quizScores: [86, 91, 88, 82],
  },
  {
    studentName: "Emily B.",
    quizScores: [78, 82, 85, 89],
  },
  {
    studentName: "James C.",
    quizScores: [92, 88, 90, 86],
  },
]

const dropLowestScore = (scoresArr) => {
  const lowestScore = Infinity;
  const lowestScoreIndex = 0;

  for (let i = 0; i < scoresArr.length; i++) {
    if (scoresArr[i] < lowestScore) {
      lowestScore = scoresArr[i];
      lowestScoreIndex = i;
    }
  }

  scoresCopy = scoresArr;
  scoresCopy.splice(lowestScoreIndex, 1);
  return scoresCopy;
}

const calculateAverage = (scoresArr) => {
  let sum = 0;
  for (let i = 1; i < scoresArr.length; i++) {
    sum += scoresArr[i];
  }
  return (sum / scoresArr.length).toFixed(2);
}

const displayResults = (gradebook) => {
  for (let i = 0; i < gradebook.length; i++) {
    const student = gradebook[i];

    const curvedScores = dropLowestScore(student.quizScores);
    const curvedAverage = calculateAverage(curvedScores);

    const unCurvedAverage = calculateAverage(student.quizScores);

    console.log(`${student.studentName} Scores: ${student.quizScores.join(', ')}`)
    console.log(`Average: ${unCurvedAverage}`);
    console.log(`Curved Average: ${curvedAverage}`);
    console.log(`--------------------------------`);
  }
}

displayResults(gradebook);