let studentsScore = [
    {
        name : 'Andi',
        score : 90
    },
    {
        name : 'Rudi',
        score : 80
    },
    {
        name : 'Dira',
        score : 100
    },
];

let maxScore = 0;
let maxName = '';

for (let i = 0; i < studentsScore.length; i++ ) {
    if (studentsScore[i].score > maxScore ) {
        maxScore = studentsScore[i].score;
        maxName = studentsScore[i].name;
    }
}


console.log(`Siswa dengan nilai tertinggi adalah ${maxName} dengan nilai ${maxScore}`);