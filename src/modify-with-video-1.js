/* 
Objective: Calculate and display the results of the 
grade book below. For each student, we want to display
the average of their quiz scores AND the average of 
their quiz scores after the lowest score is dropped.

The program is buggy! Find and fix the bugs. Then, record 
a short video explaining what you found, what impact the 
bugs had, and how you fixed them.

ADD YOUR LOOM LINK HERE: 
*/ https://www.loom.com/share/b1051f2681564ab6a4d68497038f9bba?sid=5a1c69f1-704e-43e8-8480-3aada6f19946
//obj full of student and their quizScores
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
// function that finds the remove the lowestScore in student quizScores
const dropLowestScore = (scoresArr) => {
  let lowestScore = Infinity; // error one need to change const to let so it reasign
  let lowestScoreIndex = 0;
  //first it makes the the value Infinity
  for (let i = 0; i < scoresArr.length; i++) {
    if (scoresArr[i] < lowestScore) {
      lowestScore = scoresArr[i];
      lowestScoreIndex = i;
    } //if score is bigger then whats new then its get replace with the smaller number
    //when scores is taken it also store it index for later
  }

  const scoresCopy = [...scoresArr]; // using a spread operator to make an copy of the used array to not moditfy when the refenrence arr
  scoresCopy.splice(lowestScoreIndex, 1);
  return scoresCopy;
  // makes a copy of the array and remove the the lowest number
}
// function that add everthing in the array then divibe it by the number in the array
const calculateAverage = (scoresArr) => {
  let sum = 0;
  for (let i = 0; i < scoresArr.length; i++) { // i started with 0 making it not adding the sum together yet divibing by the amount of number
    sum += scoresArr[i];
  }
  return (sum / scoresArr.length).toFixed(2);
}
// for-loop the logs each student list of score, score average, and the average without the lowest scores 
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
