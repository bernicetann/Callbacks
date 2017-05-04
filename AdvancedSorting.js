var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


//sort by asceding name, if same name...
students.sort(function(a, b) {
  var studentNameA = a.name;
  var studentNameB = b.name;
  if (studentNameA < studentNameB) {
    return -1;
  }
  if (studentNameA > studentNameB) {
    return 1;
  }
  if (studentNameA === studentNameB) {
    var ageA = a.age;
    var ageB = b.age;
    if (ageA < ageB) {
      return 1;
    }
    if (ageA > ageB) {
      return -1;
    }
    return 0;
  }
});




console.log(students.sort());

