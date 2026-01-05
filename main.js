/*
array
*/

let a = 10
let b = 20
let c = 30
console.log('a:', a, 'b:' , b, 'c:' , c)

let ages =[10,20,30] // array 3 items
console.log('ages:', ages)
console.log('ages[1]:', ages[1])

ages = [15,25]
console.log('ages list:', ages)

ages.push(35)
console.log('ages after pust:', ages)

ages.pop()
console.log('ages after pop:', ages)

///

let ages = [26, 31, 36, 41, 46]

if (ages.includes(30)) {
    console.log("Age 30 is found in the array.")
}

///

let ages = [25, 30, 35, 40, 45]
console.log('Ages:', ages)

let fruits = ['apple', 'banana', 'cherry']
console.log('Fruits:', fruits)
fruits.push('mango')
console.log('Fruits after push:', fruits)
console.log('Fruits fruits:', fruits.length)

for (let i=0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}:`, fruits[i])
}

///

let student = [{
    ages: 30,
    name: "John",
    grade: 'A'
}, {
    ages: 25,
    name: "Jane",
grade: 'B'
}]

for (let i = 0; i < student.length; i++) {
    console.log("Student " + (i + 1) + ":")
console.log("Name: " + student[i].name)
console.log("Age: " + student[i].age)
console.log("Grade: " + student[i].grade)
}

student.push({
    age: 28,
    name: "Mike",
    grade: 'C'
})
console.log("Added new student:", student[student.length - 1])

student.pop();
console.log("ARemoved last student. Current students:",student)

///

let score1 = 10
let score2 = 800

function calculation_grade(parameter){
    if (score >= 80){
       grade = 'A'
    } else if (score >=70){
       grade = 'B'
    } else if (score >=60){
       grade = 'C'
    } else if (score >=50){
       grade = 'D'
    } else {
       grade = 'F'
    }
    return grade
}
let grade1 =calculation_grade(score1)
let grade2 =calculation_grade(score2)
console.log('Score1: ' + score1 + ', Grade: ' + grade1)
console.log('Score2: ' + score2 + ', Grade: ' + grade2)

///

let scores = [90, 80, 70, 60, 50]

for (let i = 0; i<scores.length; i++){
    console.log(`Score ${i + 1}: ${scores[i]}`)
}

scores = scores.map((s) => {
    return s - 10
})

scores.forEach((s) => {
    console.log('score:',s)
})

///

let scores = [90, 80, 70, 60, 50]
let newScores = []

for (let i = 0; i<scores.length; i++){
    console.log(scores[i])
    if (scores[i] >=60) {
        newScores.push(scores[i])
    }
}

newScores.forEach((ns) => {
    console.log('new score: ' + ns)
})

///

let student = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 20, grade: "B"},
    {name: "Jim", age: 20, grade: "C"},
]
console.log('Student',students[0])

let student = students.find((s) => {
    return s.name === "Jane"
})

let dubblescoreStudents = students.map((s) => {
    s.age = s.age * 2
    return s
})

let highGradeStudents = students.filter((s) => {
    return s.grade === "A"
})

console.log('Student ',student)
console.log('Dubble Score Students',dubblescoreStudents)
console.log('High Grade Students',highGradeStudents)

