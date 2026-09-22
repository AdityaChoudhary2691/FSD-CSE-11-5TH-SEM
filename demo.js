const student={
  name: "Ashish",
  age: 43,
  branch : "CSE"
}

const newstudent={
  ...student
}

console.log(newstudent.name);
console.log(newstudent.age);
console.log(newstudent.branch);
