function findElement(arr, func) {
    let num = 0;
    for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
        return num;
    }
    }
    return undefined;
}


console.log(findElement([1, 2, 3, 4, 8], function(num) { return num % 2 === 0; }));