// function frankenSplice(arr1, arr2, n) {
//   var order = arr1.slice(0, 2);
//   console.log(arr2.splice(1, n, order));
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);



function frankenSplice(arr1, arr2, n) {
   for (var i=0; i < arr1.length; i++) {
    
    arr2.splice(n, 0, arr1[i]);
    n++
   } console.log(arr2)
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);