const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    const element = arr[i];
    // console.log(element);
    // console.log(`${element} ${element * 5}`);
    // sum += element;
    if (element % 2 == 0) {
        console.log(element);
        sum += element;
    }
}
console.log("sum of even number is "+sum);