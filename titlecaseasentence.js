
var word = "hello world"
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function titleCase(str) {
    var str = str.charAt(0).toUpperCase + str.slice(1) + str.split(" ");
    return str;
}
 titleCase("hello world");