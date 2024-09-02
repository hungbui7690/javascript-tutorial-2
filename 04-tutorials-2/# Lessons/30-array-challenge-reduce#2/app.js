/*
  Array Challenge: reduce()

    #### survey
    1. list favorite subjects with reduce
      {
      english: 1
      history: 1
      math: 3
      }
    2. assign to survey and log

  students = [
    ...,
    {
    id: 5,
    name: 'bobo',
    score: 74,
    favoriteSubject: 'math',
    },
  ];

*/
console.log('students', students)

//////////////////////////////////////
// ### survey
/*
  survey = {}

  then: 
  survey = {
    'art' : 0,
    'math' : 1,
    'history' : 1
  } = 0

*/
//////////////////////////////////////
const survey = students.reduce(function (survey, student) {
  const favSubject = student.favoriteSubject
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1
  } else {
    survey[favSubject] = 1
  }
  // console.log(survey)
  return survey
}, {})

console.log(survey)
