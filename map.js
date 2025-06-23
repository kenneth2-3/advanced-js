// Using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// Using map() method

const multByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()

const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);

// Simplified w/ map() + arrow function

const arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects

const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'Javascript'
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML'
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skill: 'CSS'
    },
];

const studentsWithIds = students.map(student => [student.name, student.id, student.profession, student.skill]);
console.log(studentsWithIds);