String.prototype.capitalize = function() {
     this.charAt(0).toUpperCase() + this.slice(1);
} 


"hello world".capitalize();  =>  "Hello world" 
var word = "hello World"

var word = "hello world"
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function titleCase("hello world") {
    console.log("hello world".charAt(0).toUpperCase() + "hello world".slice(1));
}
titleCase("hello world")