

const student = [
    ["physics :  70","chemistry : 75", "math : 90"],
    ["physics :  76","chemistry : 79", "math : 96"],
    ["physics :  79","chemistry : 72", "math : 92"],
    ["physics :  78","chemistry : 78", "math : 99"],
    ["physics :  75","chemistry : 70", "math : 95"]
]

for (let i = 0; i < student.length; i++){
    console.log(i+1 + "th Student");
    for (let j = 0; j < student[i].length; j++){
        console.log(student[i][j])
    }
}