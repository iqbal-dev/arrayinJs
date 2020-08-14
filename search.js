const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isFound = false;
for (let i = 0; i < array.length; i++){
    if (array[i] == 7) {
        console.log('Data is found '+i);
        isFound = true;
        break;
    }
}
if (!isFound) {
    console.log("data is not found");
}